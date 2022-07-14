import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookie';
import {
  createSession,
  getUserByUsernameWithPasswordHash,
} from '../../util/database';

type RegisterResponseBody =
  | { errors: { message: string }[] }
  | { user: { id: number } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  console.log('req.body api', req.body);
  // check method
  if (req.method === 'POST') {
    // check if username & pw are strings
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.password !== 'string' ||
      !req.body.username ||
      !req.body.password
    ) {
      res.status(400).json({
        errors: [{ message: 'ERROR: username or password not provided.' }],
      });
      return;
    }

    const userWithPasswordHashUseWithCaution =
      await getUserByUsernameWithPasswordHash(req.body.username);

    // 1. check if user is registered
    if (!userWithPasswordHashUseWithCaution) {
      res.status(401).json({
        errors: [{ message: 'ERROR: password or username incorrect.' }],
      });
      return;
    }

    // 2. check password
    const passwordMatches = await bcrypt.compare(
      req.body.password, // what user types into the input field
      userWithPasswordHashUseWithCaution.passwordHash, // what is saved in database
    );

    if (!passwordMatches) {
      res.status(401).json({
        errors: [{ message: 'ERROR: password or username incorrect.' }],
      });
      return;
    }

    const userId = userWithPasswordHashUseWithCaution.id;

    const token = crypto.randomBytes(80).toString('base64');

    const session = await createSession(token, userId);
    console.log(session);

    const serializedCookie = await createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    console.log('serialized cookie:', serializedCookie);

    // return status
    res
      .status(200)
      // tealls the browser to create the cookie for us
      .setHeader('set-Cookie', serializedCookie)
      .json({ user: { id: userId } });
  } else {
    res.status(400).json({ errors: [{ message: 'method not allowed' }] });
  }
}

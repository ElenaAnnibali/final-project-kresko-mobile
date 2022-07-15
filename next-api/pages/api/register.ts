import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookie';
import {
  createSession,
  createUser,
  getUserByUsername,
} from '../../util/database';

type RegisterResponseBody =
  | { errors: { message: string }[] }
  | { user: { id: number } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  // check if the methos is POST
  if (req.method === 'POST') {
    // get the request body
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.password !== 'string' ||
      !req.body.username ||
      !req.body.password
    ) {
      res.status(400).json({
        errors: [{ message: 'ERROR: username or password not provided' }],
      });
      return;
    }

    // check if user already exists
    if (await getUserByUsername(req.body.username)) {
      res.status(401).json({
        errors: [
          { message: 'ERROR: the username you provided already exist.' },
        ],
      });
      return;
    }

    // 1. get userinfo
    const user = req.body;

    // get the username
    const username = req.body.username;
    // hash the password
    const passwordHash = await bcrypt.hash(req.body.password, 12);

    console.log('plain', req.body.password);
    console.log('hash', passwordHash);

    // create new user
    const newUser = await createUser(req.body.username, passwordHash);

    console.log('new user:', newUser);

    const userId = newUser.id;
    // 4. create a session (random session token, using the 64 base characters)
    const token = crypto.randomBytes(80).toString('base64');
    console.log('token', token);

    const session = await createSession(token, userId);
    console.log(session);

    const serializedCookie = await createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    res
      .status(200)
      .setHeader('set-Cookie', serializedCookie)
      .json({ user: { id: newUser.id } });
  } else {
    res.status(400).json({ errors: [{ message: 'method not allowed' }] });
  }
}

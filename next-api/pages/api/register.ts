import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

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
      res
        .status(400)
        .json({ errors: [{ message: 'username or password not provided' }] });
      return;
    }

    // get the username
    // hash the password
    const passwordHash = await bcrypt.hash(req.body.password, 12);

    console.log('plain', req.body.password);
    console.log('hash', passwordHash);

    // create new user
  }
}

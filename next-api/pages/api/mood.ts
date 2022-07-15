import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookie';
import {
  createMoodEntry,
  createSession,
  createUser,
  getUserByUsername,
} from '../../util/database';

type MoodResponseBody =
  | { errors: { message: string }[] }
  | { mood: { content: string } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MoodResponseBody>,
) {
  // check if the method is POST
  if (req.method === 'POST') {
    // get the request body
    if (typeof req.body.mood !== 'string' || !req.body.mood) {
      res.status(400).json({
        errors: [{ message: 'please, select a mood' }],
      });
      return;
    }

    // 1. get mood info
    const mood = req.body;

    // get the mood entry
    const moodEntry = req.body.mood;

    // create new user
    const newMoodEntry = await createMoodEntry(req.body.mood);

    console.log('new mood entry:', newMoodEntry);

    const moodId = newMoodEntry.id;

    res.status(200).json({ mood: { content: newMoodEntry.mood } });
  } else {
    res.status(400).json({ errors: [{ message: 'method not allowed' }] });
  }
}

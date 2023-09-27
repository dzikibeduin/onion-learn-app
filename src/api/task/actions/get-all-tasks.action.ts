import { RequestHandler } from 'express';

interface Dependencies {}

const getAllTasksAction =
  ({}: Dependencies): RequestHandler =>
  (req, res, next) =>
    res.status(200).json({ message: 'Hello world!' });

export default getAllTasksAction;

import { RequestHandler } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_KEY} from "../config/app";
import createHttpError, { InternalServerError } from 'http-errors';

export const signUpUser: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createHttpError(422, 'User already exists with this email!'));

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    return next(InternalServerError);
  }
};

export const signInUser: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) return next(createHttpError(401, 'Invalid password'));

      const token = jwt.sign({ 
        name:user.name,
        email:user.email,
        userId:user._id
       }, JWT_KEY, { expiresIn: '7d' });
       res.cookie("jwt",token);
      res.json({ message :user.name,token});
    } else {
      return next(createHttpError(401, 'User not found'));
    }
  } catch (error) {
    return next(InternalServerError);
  }
};

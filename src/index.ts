import { error } from 'console';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import noteRoutes from './routes/notes';
import userRoute from './routes/user'
import passport from 'passport';
import kpassport from './middleware/passport';
import cookieParser from 'cookie-parser';
import { authChecker } from './middleware/authChecker';

const app = express();

const port = 8000;
const MONGO_URL = 'mongodb+srv://rawanshubham:1234@cluster0.sv16obs.mongodb.net/?retryWrites=true&w=majority';
// Connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
mongoose.connection.on('error', (error: Error)=> console.log(error));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
kpassport(passport);
app.use('/api',authChecker, noteRoutes);
//authcheck is auth function a user will only able to see or create todo if it is authencated or account is loggged in
app.use('/user', userRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//to check the api let's go to thunder client
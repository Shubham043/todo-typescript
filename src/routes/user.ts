import Router from 'express'
import { signUpUser, signInUser } from '../controllers/user';
import { signinUserValidation, signupUserValidation } from '../validation/userValidation';

const router = Router();

router.post('/signUp', signupUserValidation,signUpUser);
router.post('/signIn',signinUserValidation,signInUser);

export default router;
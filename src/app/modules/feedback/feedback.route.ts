import express from 'express';
import { FeedbackController } from './feedback.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../../enums/user';
const router = express.Router();

// Routes
router.get(
  '/',
  auth(USER_ROLE.SUPER_ADMIN),
  FeedbackController.getAllFeedback
);

router.post('/', FeedbackController.addFeedback);

router.get('/:id', FeedbackController.getSingleFeedback);

export const FeedbackRoutes = router;

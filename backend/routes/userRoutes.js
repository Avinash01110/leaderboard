import express from 'express';
import {
  getAllUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.post('/claim', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history', getClaimHistory);

export default router;
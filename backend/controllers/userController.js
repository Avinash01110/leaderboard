import User from '../models/User.js';
import ClaimHistory from '../models/ClaimHistory.js';

// Get All Users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Add User
export const addUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Claim Points
export const claimPoints = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.points += randomPoints;
    await user.save();

    const claimHistory = new ClaimHistory({ userId, pointsClaimed: randomPoints });
    await claimHistory.save();

    res.json({ user, pointsClaimed: randomPoints });
  } catch (error) {
    next(error);
  }
};

// Get Leaderboard
export const getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await User.find().sort({ points: -1 });
    res.json(leaderboard);
  } catch (error) {
    next(error);
  }
};

// Get Claim History
export const getClaimHistory = async (req, res, next) => {
  try {
    const history = await ClaimHistory.find().populate('userId', 'name');
    res.json(history);
  } catch (error) {
    next(error);
  }
};
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const User = require('../models/User');

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private (middleware to be added)
router.get('/me', async (req, res) => {
  try {
    // This will be modified once auth middleware is implemented
    // For now, it's just placeholder
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
    
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private (middleware to be added)
router.post('/', async (req, res) => {
  const {
    bio,
    age,
    gender,
    location,
    disorders,
    preferences,
    socialLinks
  } = req.body;
  
  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (bio) profileFields.bio = bio;
  if (age) profileFields.age = age;
  if (gender) profileFields.gender = gender;
  if (location) profileFields.location = location;
  if (disorders) profileFields.disorders = disorders;
  
  // Build preferences object
  if (preferences) {
    profileFields.preferences = {};
    if (preferences.notifications !== undefined) profileFields.preferences.notifications = preferences.notifications;
    if (preferences.theme) profileFields.preferences.theme = preferences.theme;
    
    // Build accessibility object
    if (preferences.accessibility) {
      profileFields.preferences.accessibility = {};
      if (preferences.accessibility.highContrast !== undefined) {
        profileFields.preferences.accessibility.highContrast = preferences.accessibility.highContrast;
      }
      if (preferences.accessibility.fontSize) {
        profileFields.preferences.accessibility.fontSize = preferences.accessibility.fontSize;
      }
      if (preferences.accessibility.reduceMotion !== undefined) {
        profileFields.preferences.accessibility.reduceMotion = preferences.accessibility.reduceMotion;
      }
    }
  }
  
  // Build social links object
  if (socialLinks) {
    profileFields.socialLinks = {};
    if (socialLinks.twitter) profileFields.socialLinks.twitter = socialLinks.twitter;
    if (socialLinks.facebook) profileFields.socialLinks.facebook = socialLinks.facebook;
    if (socialLinks.linkedin) profileFields.socialLinks.linkedin = socialLinks.linkedin;
    if (socialLinks.instagram) profileFields.socialLinks.instagram = socialLinks.instagram;
  }
  
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    
    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      
      return res.json(profile);
    }
    
    // Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Private (Admin only - middleware to be added)
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Private (middleware to be added)
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);
    
    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/profile
// @desc    Delete profile & user
// @access  Private (middleware to be added)
router.delete('/', async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 
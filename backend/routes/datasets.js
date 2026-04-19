const express = require('express');
const router = express.Router();
const Dataset = require('../models/Dataset');

// @desc    Get a single random dataset
// @route   GET /api/datasets/random
// @access  Public
router.get('/random', async (req, res) => {
  try {
    // $sample is a MongoDB aggregation operator that returns N random documents
    const result = await Dataset.aggregate([{ $sample: { size: 1 } }]);

    if (!result || result.length === 0) {
      return res.status(404).json({ message: 'No datasets found. Please seed the database.' });
    }

    res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @desc    Get all datasets
// @route   GET /api/datasets
// @access  Public
router.get('/', async (req, res) => {
  try {
    const datasets = await Dataset.find();
    res.status(200).json(datasets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

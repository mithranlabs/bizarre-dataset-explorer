require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Dataset = require('../models/dataset');

const datasets = [
  {
    title: 'Historical UFO Sightings',
    description:
      'Over 80,000 reports of UFO sightings over the last century, including time, location, shape of craft, and eyewitness duration.',
    sourceUrl: 'https://www.kaggle.com/datasets/camnugent/ufo-sightings-around-the-world',
    mernChallenge:
      'Build an interactive world map that plots sightings by location. Add a filter by decade to watch patterns shift over time.',
    mlChallenge:
      'Can you predict the reported "shape" of a UFO based on time of year, geographic location, and duration? Train a multi-class classifier.',
    tags: ['Geospatial', 'Weird', 'Historical', 'Government'],
  },
  {
    title: 'World Happiness Report',
    description:
      'Annual survey data scoring 150+ countries on happiness based on GDP, social support, life expectancy, freedom, and corruption perception.',
    sourceUrl: 'https://www.kaggle.com/datasets/unsdsn/world-happiness',
    mernChallenge:
      'Build a country ranking dashboard with a choropleth map. Let users click a country to see a breakdown of its happiness score components in a radar chart.',
    mlChallenge:
      'Build a regression model to predict a country\'s happiness score. Which feature (GDP, freedom, etc.) is the strongest predictor?',
    tags: ['Economics', 'Social Science', 'Global'],
  },
  {
    title: 'Bigfoot Sighting Reports',
    description:
      'A curated database of over 4,500 Bigfoot encounter reports from the Bigfoot Field Researchers Organization, including location, weather, and witness narrative.',
    sourceUrl: 'https://www.kaggle.com/datasets/josephvm/bigfoot-sightings-data',
    mernChallenge:
      'Build a "Bigfoot Heat Map" by US state/county. Include a sidebar that shows the raw text of a random report from that region.',
    mlChallenge:
      'Use NLP to analyze sentiment and keyword frequency in the witness narratives. Does the language used differ by region or decade?',
    tags: ['Geospatial', 'Weird', 'NLP', 'USA'],
  },
  {
    title: 'Global Fast Food Restaurants',
    description:
      'Location data for over 50,000 fast food chains worldwide, including McDonald\'s, KFC, Burger King, and Subway, with addresses and coordinates.',
    sourceUrl: 'https://www.kaggle.com/datasets/datafiniti/fast-food-restaurants',
    mernChallenge:
      'Build a "Fast Food Desert Finder." Given a US zip code, show how far the nearest of each major chain is using the Haversine formula.',
    mlChallenge:
      'Cluster restaurant locations using K-Means to identify fast food "hubs" vs. sparse regions. Visualize the clusters on a map.',
    tags: ['Geospatial', 'Food', 'Business'],
  },
  {
    title: 'Most Streamed Spotify Songs 2023',
    description:
      'The most-streamed songs on Spotify in 2023, including audio features like BPM, key, danceability, energy, and valence (positivity).',
    sourceUrl: 'https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023',
    mernChallenge:
      'Build a "Vibe Matcher." Let users drag sliders for danceability and energy, and return the top 5 songs that match their vibe.',
    mlChallenge:
      'Can you predict a song\'s stream count from its audio features? Compare a linear regression baseline against a gradient boosted model.',
    tags: ['Music', 'Pop Culture', 'Audio Features'],
  },
];

const seedDB = async () => {
  await connectDB();

  try {
    // Wipe the existing collection to prevent duplicates on re-runs
    await Dataset.deleteMany();
    console.log('Existing datasets cleared.');

    // Insert the new seed data
    await Dataset.insertMany(datasets);
    console.log(`${datasets.length} datasets seeded successfully!`);
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    // Always disconnect after the script is done, whether it succeeded or failed
    mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
};

seedDB();
const express = require('express');
const router = express.Router();
const { getEvent, addEvent } = require('../controllers/eventController');

// Get all events
router.get('/', getEvent);

// Create new event
router.post('/', addEvent);

module.exports = router;
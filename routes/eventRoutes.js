const express = require('express');
const router = express.Router();
const { getEvents, addEvent } = require('../controllers/eventController');

// Get all events
router.get('/', getEvents);

// Create new event
router.post('/', addEvent);

// // Create new event
// router.delete('/', addDelete);

module.exports = router;
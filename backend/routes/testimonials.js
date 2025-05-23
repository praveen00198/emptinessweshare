const express = require('express');
const router = express.Router();
const Testimonial = require('../models/testimonial');

// Submit a testimonial
router.post('/', async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json({ message: 'Testimonial submitted!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit testimonial.' });
  }
});

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials.' });
  }
});

module.exports = router;

const express = require('express');
const {addQuestions,getQuestions} = require('../controllers/questionsController');

const router = express.Router();

router.post('/test', addQuestions);
router.get('/question/:id', getQuestions);


module.exports = {
    routes: router
}
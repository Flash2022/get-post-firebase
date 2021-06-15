
const firebase = require('../db');
const questions = require('../models/questions');
const firestore = firebase.firestore();


const addQuestions = async (req, res) => {
    try {
        const data = req.body;
        await firestore.collection('questions').doc(req.body.uid).set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//get data by uid
const getQuestions = async (req, res) => {
    try {
        const id = req.params.id;
        const question = await firestore.collection('questions').doc(id);
        const data = await question.get();
        if(!data.exists) {
            res.status(404).send('Question Query with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = { addQuestions, getQuestions};

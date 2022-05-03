const express = require('express');
const router = express.Router();

const {createTask, updateTask, deleteTask, getSingleTask, getAllTask} = require('../controllers/todoController');

router.route('/').post(createTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').get(getSingleTask);
router.route('/').get(getAllTask)

module.exports = router
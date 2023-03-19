const express = require("express");
const trasksController = require("./controllers/tasksController");
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', trasksController.getAll);
router.get('/tasks/:id', trasksController.findOneTask);
router.post('/tasks', tasksMiddleware.validateTitle, trasksController.createTask);
router.delete('/tasks/:id', trasksController.deleteTask);
router.put('/tasks/:id', 
    tasksMiddleware.validateTitle, 
    tasksMiddleware.validateStatus, 
    trasksController.updateTask
);

module.exports = router;
const taskSchema = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/",async (req, res) => {
    console.log(req.body)

    try {
        const task =await taskSchema.build({
            id:req.body.id,
            task: req.body.task,
            completed: req.body.completed,
            note:req.body.note
        });
        console.log(task)
        task.save()
        
    } catch (error) {
        console.log(error)
    }

});

router.get("/", async (req, res) => {
    try {
        const tasks = await taskSchema.findAll();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await taskSchema.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await taskSchema.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;

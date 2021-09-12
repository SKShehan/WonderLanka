const router = require("express").Router();
const feedback = require("../models/Feedbacks");
let Feedback  = require("../models/Feedbacks");

router.route("/add").post((req,res)=>{

    const stat = req.body.name;
    const feedback = req.body.age;

    const newFeedback = new Feedback({
        stat,
        feedback
    })

    newFeedback.save().then(()=>{
        res.json("Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Feedback.find().then(()=>{
        res.json(feedback)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/MyFeedbacksTable/update/

/////////////////////////////////////////////////Update////////////////////////////////////////////////////////////

router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    const {stat, feedback} = req.body;

    const updateFeedback = {
        stat,
        feedback
    }

    const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(()=>{
        res.status(200).send({status: "Feedback updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })   
})

module.exports = router;
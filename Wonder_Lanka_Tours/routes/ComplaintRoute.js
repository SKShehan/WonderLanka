const router = require("express").Router();
let Complaint  = require("../models/Complaint");
const complaint = require("../models/Complaints");

//////////////////////////////////////////////////////////Add Complaint(create)////////////////////////////////////////////////

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.age;
    const contact = Number(req.body.contact);
    const select = req.body.select;
    const text = req.body.text;

    const newComplaint = new Complaint({
        name,
        email,
        contact,
        select,
        text
    })

    newComplaint.save().then(()=>{
        res.json("Complaint Added")
    }).catch((err)=>{
        console.log(err);
    })

})

/////////////////////////////////////////////////////////get complaints(retirieve)///////////////////////////////////////////////

router.route("/").get((req,res)=>{
    Complaint.find().then(()=>{
        res.json(complaint)
    }).catch((err)=>{
        console.log(err)
    })
})



/////////////////////////////////////////////////Update////////////////////////////////////////////////////////////

http://localhost:8070/MyComplaintsTable/update/

router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    const {name, email, contact, select, text} = req.body;

    const updateComplaint = {
        name,
        email,
        contact,
        select,
        text
    }

    const update = await Complaint.findByIdAndUpdate(userId, updateComplaint).then(()=>{
        res.status(200).send({status: "Complaint updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })   
})


///////////////////////////////////////////////////////Delete///////////////////////////////////////////////////////////////////

http://localhost:8070/MyComplaintsTable/delete/

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Complaint.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Complaint deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Eror with delete complaint", error: err.message})
    })
})

module.exports = router;
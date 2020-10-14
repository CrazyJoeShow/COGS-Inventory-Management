const express = require("express");
const router = express.Router();
const db = require ("../models");

// ROUTES FOR ITEMS

router.get("/items", (req,res)  =>  {
    db.Item.findAll().then(allItems =>  {
        res.render("all-items")
    }) 
});


router.get("/items/:id", (req, res) =>  {
    res.render("one-item")
})

router.get("/items/:id/edit",   (req,res)   =>  {
    res.render("edit-item");
});

router.get("/items/new", (req, res) =>  {
    res.render("new-item")
})

// API ROUTES

router.get("/api/items", (req,res)=>{
    db.Item.findAll({})
        .then((items)=>{
            console.log(items);
            res.json(items);
        })
        .catch((err)=>{
            console.log(err);
            res.json({
                message: "Issue finding all items",
                success:false
            })
        })
})

router.get("/api/items/:id", (req,res)=>{
    db.Item.findAll({
        where: {
            UserId: req.params.id
        }
    }).then((userItems)=>{
        console.log(userItems);
        res.json(userItems)
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            message: "error trying to find user items",
            success:false
        })
    })
})

router.get("/api/items/:id", (req,res)=>{
    db.Item.findAll({
        where: {
            id: req.params.id
        }
    }).then((singleItem)=>{
        console.log(singleItem);
        res.json(singleItem)
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            message: "error trying to find single item",
            success:false
        })
    })
})

router.post("/api/items", (req, res)    =>  {
    const newItem = {
        unit_name: req.body.unit_name,
        unit_category: req.body.unit_category,
        unit_distributor: req.body.unit_distributor,
        unit_price: req.body.unit_price,
        unit_par: req.body.unit_par,
        items_per_unit: req.body.items_per_unit,
        item_count_type: req.body.item_count_type,
        item_count_par: req.body.item_count_par,
        UserId: req.body.UserId
    }
    db.Item.create(newItem)
        .then((newItem)=>{
            console.log(newItem);
            res.json({
                message: "created new item",
                success: true
            })
        })
        .catch((err)=>{
            console.log(err);
        })
})

module.exports = router;
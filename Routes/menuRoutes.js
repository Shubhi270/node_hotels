const express = require("express");
const menuItem = require("../models/menu");

const router = express.Router();

router.post("/food", async (req, res) => {
  try {
    const data = req.body;

    const newMenuItem = new menuItem(data);

    const response = await newMenuItem.save();

    console.log("data saved!");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/food", async (req, res) => {
  try {
    const data = await menuItem.find();

    console.log("data fetched");

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:taste_", async (req, res) => {
  try {
    const taste_ = req.params.taste_;
    if (taste_ == "sour" || taste_ == "sweet" || taste_ == "spicy") {
      
      const response = await menuItem.find({ taste: taste_ });

      const itemNames = response.map(item => item.name);

      const responseData = {
        count: itemNames.length,
        itemNames: itemNames
      }

      console.log("response fatched");
      
      res.status(200).json(responseData);
    } else {
      res.status(404).json({ error: "invalid taste" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

//comment added

module.exports = router;
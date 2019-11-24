const mongoose = require("mongoose");
const Room = require("../models/room");
const Host = require("../models/host");

exports.Rooms_get_all = (req, res, next) => {
  Room.find()
    .populate("host")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Rooms: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            category: doc.category,
            address: doc.address,
            area: doc.area,
            bathroom: doc.bathroom,
            bedroom: doc.bedroom,
            kitchen: doc.kitchen,
            garage: doc.garage,
            active: doc.active,
            rent: doc.rent,
            roomImage: doc.roomImage,
            host: doc.host,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/Rooms/" + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.Rooms_create_room = (req, res, next) => {
  const room = new Room({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    address: req.body.address,
    area: req.body.area,
    bathroom: req.body.bathroom,
    bedroom: req.body.bedroom,
    kitchen: req.body.kitchen,
    garage: req.body.garage,
    roomImage: req.files.map(file => {
      return {
        pathImg: file.path.slice(14)
      };
    }),
    discription: req.body.discription,
    host: req.body.hostId
  });
  room
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created Room successfully",
        createdRoom: {
          name: result.name,
          price: result.price,
          _id: result._id,
          host: result.host,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/rooms/" + result._id
          }
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.Rooms_get_room = (req, res, next) => {
  const id = req.params.roomId;
  Room.findById(id)
    .populate("host")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          Room: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/Rooms"
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.Rooms_update_room = (req, res, next) => {
  const id = req.params.roomId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Room.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Room updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/api/Rooms/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.Rooms_delete = (req, res, next) => {
  const id = req.params.roomId;
  Room.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Room deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/api/Rooms",
          body: { name: "String", price: "Number" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.Rooms_search = (req, res, next) => {
  const city = req.query.city;
  const district = req.query.district;
  const areamin = req.query.areamin;
  const areamax = req.query.areamax;

  Room.find({
    $and: [
      { address: new RegExp(city, "i") },
      { address: new RegExp(district, "i") },
      { area: { $lte: areamax, $gte: areamin } }
    ]
  })

    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Rooms: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            category: doc.category,
            address: doc.address,
            area: doc.area,
            bathroom: doc.bathroom,
            bedroom: doc.bedroom,
            kitchen: doc.kitchen,
            garage: doc.garage,
            active: doc.active,
            roomImage: doc.roomImage,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/Rooms/" + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  //.select('name price _id RoomImage')
};

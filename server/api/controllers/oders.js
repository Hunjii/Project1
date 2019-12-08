const mongoose = require("mongoose");
const Oder = require("../models/oder");
const Room = require("../models/room");
const Host = require("../models/host");

exports.Oders_get_all = (req, res, next) => {
  Oder.find()
    .populate("host")
    .populate("room")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Oders: docs.map(doc => {
          return {
            _id: doc._id,
            host: doc.host,
            room: doc.room,
            date: doc.date,
            status: doc.status,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/oders/" + doc._id
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

exports.Oders_create_oder = (req, res, next) => {
  const oder = new Oder({
    _id: new mongoose.Types.ObjectId(),
    host: req.body.host,
    room: req.body.room,
    date: req.body.date,
    status: req.body.status
  });
  oder
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created Oder successfully",
        createdOder: {
          host: result.host,
          room: result.room,
          _id: result._id,
          date: result.date,
          status: result.status,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/oders/" + result._id
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

exports.Oders_get_oder = (req, res, next) => {
  const id = req.params.oderId;
  Oder.findById(id)
    .populate("host")
    .populate("room")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          Oder: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/oders"
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

exports.Oders_update_oder = (req, res, next) => {
  const id = req.params.oderId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Oder.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Oder updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/api/oder/" + id
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

exports.Oders_delete = (req, res, next) => {
  const id = req.params.oderId;
  Oder.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Oder deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/api/oder",
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

// exports.Rooms_search = (req, res, next) => {
//   const city = req.query.city;
//   const district = req.query.district;
//   const areamin = req.query.areamin;
//   const areamax = req.query.areamax;

//   Room.find({
//     $and: [
//       { address: new RegExp(city, "i") },
//       { address: new RegExp(district, "i") },
//       { area: { $lte: areamax, $gte: areamin } }
//     ]
//   })

//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         Rooms: docs.map(doc => {
//           return {
//             _id: doc._id,
//             name: doc.name,
//             price: doc.price,
//             category: doc.category,
//             address: doc.address,
//             area: doc.area,
//             bathroom: doc.bathroom,
//             bedroom: doc.bedroom,
//             kitchen: doc.kitchen,
//             garage: doc.garage,
//             active: doc.active,
//             roomImage: doc.roomImage,
//             request: {
//               type: "GET",
//               url: "http://localhost:3000/api/Rooms/" + doc._id
//             }
//           };
//         })
//       };
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });

//   //.select('name price _id RoomImage')
// };

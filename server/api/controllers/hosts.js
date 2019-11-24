const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Host = require("../models/host");

exports.host_signup = (req, res, next) => {
  Host.find({ email: req.body.email })
    .exec()
    .then(host => {
      if (host.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const host = new Host({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              name: req.body.name,
              sex: req.body.sex,
              birthday: new Date(req.body.birthday),
              phone: req.body.phone,
              address: req.body.address
            });
            host
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Host created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};

exports.host_login = (req, res, next) => {
  Host.find({ email: req.body.email })
    .exec()
    .then(host => {
      if (host.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, host[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: host[0].email,
              userId: host[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          res.header("auth-token", token);
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            hostId: host[0]._id
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.host_delete = (req, res, next) => {
  Host.remove({ _id: req.params.hostId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Host deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.host_get_all = (req, res, next) => {
  Host.find()
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Hosts: docs.map(doc => {
          return {
            _id: doc._id,
            email: doc.email,
            password: doc.password,
            name: doc.name,
            sex: doc.sex,
            birthday: doc.birthday,
            phone: doc.phone,
            address: doc.address,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/host/" + doc._id
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

exports.host_update = (req, res, next) => {
  const id = req.params.userId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Host.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Host updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/api/Users/"
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

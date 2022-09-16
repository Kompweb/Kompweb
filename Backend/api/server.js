// restart the server after every change in this file or install nodemon
const express = require("express");
const server = express();
var cors = require("cors");
var bodyParser = require("body-parser");

server.use(express.json());
server.use(cors());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());

const User = require("./users/model");

server.get("/", (req, res) => {
  res.send("Hello from Express Home page");
});

// server.get("/api/users/:id", cors(corsOptions), function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for a whitelisted domain." });
// });

// GET ALL USERS -- find --
server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      // throw new Error("Arghhhhh!!!!!");
      // console.log(users);
      res.status(200).json({
        // message: "All users here",
        users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error getting users",
        err: err.message,
        stack: err.stack,
      });
    });
});

// FIND USER BY ID -- findById --
server.get("/api/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The User with the specified ID oesn not exist" });
      }
      // console.log(user);
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: "error getting user id",
        err: err.message,
        stack: err.stack,
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  const user = User.find((user) => user.id.toString() === req.params.id);
  res.status(200).json(user);
});

// CREATE USER -- insert --
server.post("/api/users", (req, res) => {
  const user = req.body;
  if (!user.name || !user.bio) {
    res.status(400).json({
      message: "Please provide name and bio for the user",
    });
  } else {
    User.insert(user)
      .then((createdUser) => {
        res.status(201).json(createdUser);
      })
      .catch((err) => {
        res.status(500).json({
          message: "error creating new user",
          err: err.message,
          stack: err.stack,
        });
      });
  }
});

//  UPDATE USER -- update --
server.put("/api/users/:id", async (req, res) => {
  try {
    const posibleUser = await User.findById(req.params.id);
    if (!posibleUser) {
      res.status(404).json({
        message: "not found",
      });
    } else {
      if (!req.body.name || !req.body.bio) {
        res
          .status(400)
          .json({ message: "Please provide name and bio for the user" });
      } else {
        const updatedUser = await User.update(req.params.id, req.body);
        res.status(200).json(updatedUser);
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "error updating user",
      err: err.message,
      stack: err.stack,
    });
  }
});

// DELETE USER -- remove --
server.delete("/api/users/:id", async (req, res) => {
  try {
    const posibleUser = await User.findById(req.params.id);

    if (!posibleUser) {
      res.status(404).json({ message: "user not found" });
    } else {
      const deletedUser = await User.remove(posibleUser.id);
      res.status(200).json(deletedUser);
    }
  } catch (err) {
    res.status(500).json({
      message: "error deleting user",
      err: err.message,
      stack: err.stack,
    });
  }
});

server.use("*", (req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  // res.write("you posted:\n");
  // res.end(JSON.stringify(req.body, null, 2));
  res.status(404).json({ message: "page not found" });
});

// DELETE USER
// server.delete("/api/users/:id", (req, res) => {
//   let user;
//   User.findById(req.params.id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).json({
//           message: "The user with the specified ID does not exist",
//         });
//       } else {
//         user = data;
//         return User.remove(req.params.id);
//       }
//     })
//     .then(() => {
//       res.status(200).json(user);
//     })
//     .catch(() => {
//       res.status(500).json({ message: "The user could not be removed" });
//     });
// });

module.exports = server;

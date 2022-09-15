// restart the server after every change in this file or install nodemon
const express = require("express");
const server = express();

const User = require("./users/model");
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello from Express Home page");
});

server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      // throw new Error("Arghhhhh!!!!!");
      // console.log(users);
      res.status(200).json({
        message: "All users here",
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

server.use("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

// server.get("/hobbits", (req, res) => {
//   res.send({ message: "Hello to Hobitton" });
// });

// server.get("/hobbits/:id", (req, res) => {
//   res.send({ message: "Hellozzz to Hobitton" });
// });

// server.post("/hobbits", (req, res) => {
//   res.status(201).json({ url: "/hobbits", operation: "POST" });
// });

// server.put("/hobbits", (req, res) => {
//   res.status(200).json({ url: "/hobbits", operation: "PUT" });
// });

// server.delete("/hobbits", (req, res) => {
//   res.status(204);
// });

// server.listen(PORT, hostname, () => {
//   // start watching for connections on the port specified
//   console.log(`Server running at http://${hostname}:${PORT}/`);
// });

// server.get("/hobbits", (req, res) => {
//   const hobbits = [
//     {
//       id: 1,
//       name: "Samwise Gamgee",
//     },
//     {
//       id: 2,
//       name: "Frodo Baggins",
//     },
//   ];

//   res.status(200).json(hobbits);
// });

// server.get("/users", (req, res) => {
//   res.find(User);
//   res.status(500).json(User);
// });

// server.get("/users", (req, res) => {
//   req.User.find();

//   if (!User) {
//     res.status(500).json({ success: false });
//   }
//   res.send(User);
// });

// GET ALL USERS
// server.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

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

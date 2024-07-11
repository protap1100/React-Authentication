const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require('dotenv').config()
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const blacklistedTokens = new Set();

async function connectToDatabase() {
  await client.connect();
  console.log("Connected to MongoDB!");

  const database = client.db("React-Auth");
  const usersCollection = database.collection("users");

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }
    if (user.password !== password) {
      return res.status(401).send({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ email: user.email }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.status(200).send({ token, email, password });
  });

  app.post("/logout", (req, res) => {
    const token = req.body.token;
    if (token) {
      blacklistedTokens.add(token);
      res.status(200).send({ message: "Logout successful" });
    } else {
      res.status(400).send({ message: "Token not provided" });
    }
  });

  app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      if (blacklistedTokens.has(token)) {
        return res.status(401).send({ message: "Token is blacklisted" });
      }
    }
    next();
  });

  app.post("/users", async (req, res) => {
    const formData = req.body;
    const result = await usersCollection.insertOne({
      name: formData.name,
      email: formData.email,
      photoUrl: formData.photoUrl,
      password: formData.password,
    });
    res.status(201).send(result);
  });
}

connectToDatabase().catch(console.error);

app.get("/", (req, res) => {
  res.send("Authentication Is Running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

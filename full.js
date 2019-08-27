const express = require("express");
const app = express();

let currentId = 1;
const posts = [];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const { data, people } = req.body;
  const newPost = { data, people, id: currentId++ };
  posts.push(newPost);
  res.json(newPost);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(i => i.id === Number(req.params.id));
  if (!post) {
    return res.sendStatus(404);
  }
  res.send(post);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find(i => i.id === Number(req.params.id));
  const { data, people } = req.body;
  if (!post) {
    return res.sendStatus(404);
  }
  post.data = data;
  post.people = people;
  res.send(post);
});

app.delete("/posts/:id", (req, res) => {
  const Index = posts.findIndex(i => i.id === Number(req.params.id));
  if (Index == -1) {
    return res.sendStatus(404);
  }
  console.log(Index);
  posts.splice(Index, 1);
  res.send(posts);
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});

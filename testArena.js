let database = [
  {
    username: "Janis",
    password: "secret",
  },
  {
    username: "Viola",
    password: "love",
  },
  {
    username: "Bob",
    password: "123",
  },
];

let newsfeed = [
  {
    name: "Janis",
    timeline: "I just love JavaScript!",
  },
  {
    name: "Viola",
    timeline: "Next stop - Croatia!",
  },
  {
    name: "Bob",
    timeline: "What a wonderful place this is",
  },
];

const usernamePrompt = prompt("Please enter your username");
const passwordPrompt = prompt("Please enter your password");

const isUserValid = (username, password) =>
  database.find(
    (user) => user.username === username && user.password === password
  );

const mongoose = require("mongoose");

const User = require("../models/User");
const Card = require("../models/Card");
const List = require("../models/List");
const Project = require("../models/Project");

mongoose.Promise = Promise;
mongoose
.connect(process.env.MONGODB_URI, { useMongoClient: true })
.then(() => {
    console.log("Connected to Mongo!");
})
.catch(err => {
    console.error("Error connecting to mongo", err);
});

const project = [{
    githubRepoUrl: "https://github.com/LPsola/Project03-backend",
    trelloBoardId: "5af1b25af3c4381ffb8ec207",

    //see what fields are needed for slack API
    slackWorkSpaceDirectory: "blah",
    slackUserId: "blah",
    contributors: ["5af32fb0e87fde5218ef910f"],
    activityFeed: ["wireframe done"],
    owner: "5af32fb0e87fde5218ef910f"
}]

const list = [{
    projectId: "5af32fff97261c525ef5a2ec",
    name: "Backlog",
    trelloBoardId: "5af1b25af3c4381ffb8ec207",
}]

const card = [{
    listId: "5af33038e3920e529c6e8c75",
    name: "Wireframe Todo",
    description: "Steps needed to complete wireframe",
    dueDate: Date.now(),
    labels: ["yellow"],
    comments: ["Lost files"],
    contributors: ["5af32fb0e87fde5218ef910f"]
}]

const user = [{
    username: "example_user",
    password: "example_pw",
}]





// Project.create(project)
// .then(() => {
//     console.log(`Created ${project.length} projects`);
// })
// .catch(err => {
//     console.log("Creation Error: ", err);
// });


// List.create(list)
// .then(() => {
//     console.log(`Created ${list.length} lists`);
// })
// .catch(err => {
//     console.log("Creation Error: ", err);
// });


Card.create(card)
.then(() => {
    console.log(`Created ${card.length} cards`);
})
.catch(err => {
    console.log("Creation Error: ", err);
});

// User.create(user)
// .then(() => {
//     console.log(`Created ${user.length} users`);
// })
// .catch(err => {
//     console.log("Creation Error: ", err);
// });
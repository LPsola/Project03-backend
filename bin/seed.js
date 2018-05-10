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
    name: "Dev Day Clone",
    imageUrl: "https://web-vassets.ea.com/Assets/Richmedia/Image/FullImageLogo/tetris-logo-480x100.png?cb=1334003595",
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
    email: "example@example.com",
    githubID: "blahgit",
    currentCards: ["5af33066f972a852e2beeee4"],
    archivedCards: ["5af33066f972a852e2beeee4"],

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
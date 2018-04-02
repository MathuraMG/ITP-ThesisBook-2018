const express = require('express');
const routes = express.Router();

const sampleStudents = [
  "student1",
  "student2",
  "student3"
];

const sampleTags = [
  "tag1",
  "tag2",
  "tag3",
  "tag4"
];

const sampleStudentData = {
  "student1" : {
    name: "student1",
    project: "Project1",
    tag: ["tag1","tag2"],
    short: "This is a project that compares the growing rate of bug infestations to the number of pet cats",
  },
  "student2" : {
    name: "student2",
    project: "Project2",
    tag: ["tag2","tag6"],
    short: "This is a project that compares the growing rate of UFO sightings to the number of vegans",
  },
  "student3" : {
    name: "student3",
    project: "Project3",
    tag: ["tag3","tag1"],
    short: "This is a project that compares the growing rate of snowstorms to the number of food carts",
  }
}

const sampleTagData = {
  "tag1" : [
    {
      student : "student1",
      project: "Project1",
      tag: ["tag1","tag2"]
    },
    {
      student : "student3",
      project: "Project3",
      tag: ["tag3","tag1"]
    }
  ],
  "tag2" : [
    {
      student : "student1",
      project: "Project1",
      tag: ["tag1","tag2"]
    },
    {
      student : "student2",
      project: "Project2",
      tag: ["tag6","tag2"]
    }
  ],
  "tag3" : [
    {
      student : "student3",
      project: "Project3",
      tag: ["tag3","tag1"]
    }
  ],
  "tag6" : [
    {
      student : "student2",
      project: "Project2",
      tag: ["tag2","tag6"]
    }
  ],
}

routes.route('/student/:student').get(getStudentProject);
routes.route('/tag/:tag').get(getTagProjects);
routes.route('/pair/:tag').get(getTagPairs);


function getStudentProject(req, res) {
  console.log(req.params.student);
  res.send(sampleStudentData[req.params.student]);
}

function getTagProjects(req, res) {
  console.log(req.params.tag);
  res.send(sampleTagData[req.params.tag]);
}

function getTagPairs(req, res) {
  console.log(req.params.tag);
  let tagPairs = [];
  console.log(sampleTagData[req.params.tag]);
  if(sampleTagData[req.params.tag]) {
    sampleTagData[req.params.tag].forEach(function(tag) {
      console.log(tag.tag);
      tagPairs = tagPairs.concat(tag.tag)
    });
  }
  tagPairs = tagPairs.filter(onlyUnique);
  res.send(tagPairs);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

module.exports = routes;

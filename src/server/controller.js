const express = require('express');
const routes = express.Router();

const sampleStudents = [
  "st1",
  "st2",
  "st3"
];

const sampleTags = [
  "tag1",
  "tag2",
  "tag3",
  "tag4"
];

const sampleStudentData = {
  "st1" : {
    project: "Project1",
    tag: ["tag1","tag2"]
  },
  "st2" : {
    project: "Project2",
    tag: ["tag2","tag3"]
  },
  "st3" : {
    project: "Project3",
    tag: ["tag3","tag1"]
  }
}

const sampleTagData = {
  "tag1" : [
    {
      student : "st1",
      project: "Project1",
      tag: ["tag1","tag2"]
    },
    {
      student : "st3",
      project: "Project3",
      tag: ["tag3","tag1"]
    }
  ],
  "tag2" : [
    {
      student : "st1",
      project: "Project1",
      tag: ["tag1","tag2"]
    },
    {
      student : "st2",
      project: "Project2",
      tag: ["tag2","tag3"]
    }
  ],
  "tag3" : [
    {
      student : "st2",
      project: "Project2",
      tag: ["tag2","tag3"]
    },
    {
      student : "st3",
      project: "Project3",
      tag: ["tag3","tag1"]
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

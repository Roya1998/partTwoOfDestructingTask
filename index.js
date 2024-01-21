//Task:Advanced Object and Array Handling

//Part 1

const employeeDetails = {
  fullname: "Lale Hasanova",
  position: "CEO",
  yearsOfExperience: 5,
  skills: [
    "leadership",
    "adaptibility",
    "communication",
    "analytic thinking",
    "global perspective",
  ],
  contact: {
    email: "lalehasanova@gmail.com",
    phone: "0554382719",
  },
  department: "executive leadership",
};

//Part 2

const {
  fullname: employeeName,
  position: positionOfCeo,
  contact: contactOfCeo,
  ...rest
} = employeeDetails;

console.log(employeeName, positionOfCeo, contactOfCeo, rest);

//Part 3

const projectScores = [
  { projectId: 1, score: 5 },
  { projectId: 2, score: 10 },
  { projectId: 3, score: 15 },
  { projectId: 4, score: 20 },
];

console.log(projectScores[0].projectId, projectScores[0].score);

//Part 4

const personalInfo = {
  homeAdress: "Nizami,Baku",
  emergencyContact: "0702345675",
  maritalStatus: "single",
};

const completeEmployeeProfile = {
  ...employeeDetails,
  ...personalInfo,
};

console.log(completeEmployeeProfile);

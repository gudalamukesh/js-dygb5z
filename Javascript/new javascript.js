const students = [
  {
    name: 'John',
    chemistryMarks: 75,
    biologyMarks: 80,
    dateOfBirth: '15-06-1998',
  },
  {
    name: 'Alice',
    chemistryMarks: 85,
    biologyMarks: 90,
    dateOfBirth: '22-03-1999',
  },
  // Add more student objects to the array
];

students.sort((a, b) => {
  if (a.chemistryMarks === b.chemistryMarks) {
    if (a.biologyMarks === b.biologyMarks) {
      return 0;
    }
    return b.biologyMarks - a.biologyMarks;
  }
  return b.chemistryMarks - a.chemistryMarks;
});

console.log(students);
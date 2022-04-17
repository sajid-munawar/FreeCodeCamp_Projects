// Record Collection

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop]
  }else 
  if (prop!=='tracks' && value!==""){
    records[id][prop] = value
  }else 
  if (prop==='tracks' && records[id].hasOwnProperty(prop)==false){
    records[id][prop] = [value]
  }else 
  if (prop=='tracks' && value!==""){
    records[id][prop].push(value)
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Alhamdulillah



// Profile Lookup

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
console.log()
function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i=0; i<contacts.length ;i++){
if(contacts[i]['firstName']==name){

  if (contacts[i]['firstName']==name && contacts[i].hasOwnProperty(prop)){
    return contacts[i][prop]
  }else if (contacts[i]['firstName']==name && !contacts[i].hasOwnProperty(prop)){
    return "No such property"
  }
  }
} 
  return "No such contact"

  // Only change code above this line
}

console.log(lookUpProfile("Bob", "number"));


// Alhamdulillah

// Generate a random whole number within a range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
console.log(randomRange(10, 100));
const person = {
    name : 'Dave Turner', age: '47', location: { city: 'Harrison Township', temp: 42}
}

// basic destruct
const {name, age} = person;
console.log(`${name} is ${age}`);

// destruct with complex class
const {city, temp} = person.location;
if(city && temp) {
    console.log(`${city} is ${temp} degrees`);
}

// default values to support missing properties
const {name: name2, job ='unemployed'} = person;
console.log(`${name} job is ${job} `);

// renamed vars
const {name: fullName} = person;
console.log(`Full name is ${fullName} `);

const address = ['39030 Winkler', 'Harrison Township', 'Michigan', '48045'];
const [street, town, state, zip] = address;
console.log(`you are in ${street} in the city of ${town} state ${state} Zip code ${zip}`)

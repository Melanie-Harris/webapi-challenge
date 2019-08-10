const express= require('express');

const server = express();


let devPeople = [
  {
    id: 1,
    name: "Melanie Harris",
    gender: "Female",
  },
  {
    id: 2,
    name: "Lelia Smith",
    gender: "Female",
  },
  {
    id: 3,
    name: "John Doe",
    gender: "Male",
  },
  {
    id: 4,
    name: "Jane Harley",
    gender: "Female",
  }
];


let chores = [
  {
     id: 1,
    description: "Save the world",
    complete: "false",
    assignedTo: 1,
  },
  {
    id: 2,
    description: "Do Homework",
    complete: "true",
    assignedTo: 2,
  },
  {
    id: 3,
    description: "Clean House",
    complete: "false",
    assignedTo: 3,
  },
  {
    // id: 4,
    // description: "Meditate",
    // complete: "false",
    // assignedTo: 4,

    // NO CHORE FOR NUMBER 4 TO TEST ERROR CODE 404
  }
];



let choresId = devPeople.length + 1;

//testing setup here
server.get('/chores', (req,res) =>{
res.status(200).json(chores);
});

//----------------------Melanie's CRUD Below

//List of chores. If id not found 404
server.get('/chores/:id', (req, res)=>{

const chore = chores.find(chore => chore.id === Number(req.params.id))//The Number() function converts the object argument to a number that represents the object's value.
if(!chore){
    res.status(404).json({message: 'sorry no chore found'})
}else{
    res.status(200).json(chore)
}
});


 //Query string param. If value is true, return list of completed chores. If value is false, chore completed = false. If not sent return all chores **Id 2 has completed chore.**
server.get("/chores", (req, res) => {
    const completed = req.query.completed;
    const filter = completed === "true" ? true : false; //ternarary op: if completed is true return true, if not return false
  if(completed){
      const answer = chores.filter(chore.completed === filter);
    res.status(200).json(answer)
      }else{
         res.status(200).json(chores)
      }
});

// When saving chore, check to see if there is a person that matches the id. If no person with id, do not save chore give status code 400
server.get('chores/devPeople/:id/chores', (req, res) => {
    const devPerson = devPeople.find(devPeopleId => devPeopleID.id === Number(req.params.id))

    const chore=chores.filter( choresId.assignedTo === person.id)

    if(devPerson){
        if(chore){
            res.status(200).json(chore);
        }else{
            return []
        } 
    }else{
            res.status(400).json({message: "sorry, no developer found"})
        }
});

// POST is used to send data to a server to create/update a resource. If required feild is missing, send a 404
server.post('/chores', (req,res)=>{
    const chore= req.body;

    if(chore.description || chore.assignedTo || chore.completed){
        chores.push(chore)
        res.status(201).json(chores);
    } else{
        res.status(400).json({message: 'required field is missing'})
    }
});

//if chore is found return chore, if not, return 404 with no found message
server.put('/chores/:id', (req, res)=>{
const chore = chores.find(todo => todo.id == req.params.id)

if(!chore){
    res.status(404).json({message: 'sorry, no chore matches that id'})
}else{
    Object.assign(chore, req.body);// copies object from one source object to next
    res.status(200).json(chore);  
    //The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
}
});

//deletes chore by id
server.delete('/chores/:id', (req, res)=>{
chores = chores.filter(chore=> chore.id !== Number(req.params.id));

res.status(200).json
});


const port = process.env.PORT || 8008;
server.listen(port, () => console.log(`\nAPI is running on ${port}\n`));
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



let chores = [];

let choresId = 1;

server.get('/chores', (req,res) =>{
res.status(200).json(chores);
});

server.get('/chores/:id', (req, res)=>{
const chore = chores.find(chore => chore.id === req.params.id)
});

server.post('/chores', (req,res)=>{
    const chore= req.body;
    choreId = choreId + 1

    chores.push(chore);
    res.status(201).json(chores);
})
server.put('/chores', (req, res)=>{

})
server.delete('/chores', (req, res)=>{

})


const port = process.env.PORT || 8008;
server.listen(port, () => console.log(`\nAPI is running on ${port}\n`));
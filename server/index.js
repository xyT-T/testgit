const express = require("express");
const knex = require('knex');
const bodyParser = require('body-parser');

const db = knex({
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'sdzrjsywgx',
      database: 'loginform'
  }
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors());

app.post('/register', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if(!firstname.length || !lastname.length || !email.length || !password.length){
      res.json('fill all the fields');
  } else{
      db("users").insert({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
      })
      .returning(["firstname", "email"])
      .then(data => {
          res.json(data[0])
      })
      .catch(err => {
          if(err.detail.includes('already exists')){
              res.json('email already exists');
          }
      })
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.select('firstname', 'email')
  .from('users')
  .where({
      email: email,
      password: password
  })
  .then(data => {
      if(data.length){
          res.json(data[0]);
      } else{
          res.json('email or password is incorrect');
      }
  })
})

app.listen(3001, () => {
  console.log(`Server listening on 3001...`);
});
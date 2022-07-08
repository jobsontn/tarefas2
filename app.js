// Importação CommonJS modules
const express = require('express');
const path = require('path');
const firebase = require('./services/firebase');

// Criar aplicação WEB express
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Midlewares
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

//Rotas
app.get('/', (req, res) => {
  res.render('index', {titulo: 'Bem vindo!'});
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  console.log('efetuando login ...');
  console.log(req.body);
  firebase.signInWithEmailAndPassword(req, res);
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {
  console.log('cadastrando usuário ...');
  console.log(req.body);
  firebase.createUserWithEmailAndPassword(req, res);
});
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rodar a aplicação express na porta 3000
app.listen(3001);

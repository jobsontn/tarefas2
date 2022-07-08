// Importação CommonJS modules
const firebase = require('firebase/compat/app');

// Produtos do Firebase que serão utilizados
require('firebase/compat/auth');
require('firebase/compat/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBJ8x49sFzRYcOz0cdotdJgBqF0nLEROVk",
  authDomain: "tarefas2-f07c2.firebaseapp.com",
  projectId: "tarefas2-f07c2",
  storageBucket: "tarefas2-f07c2.appspot.com",
  messagingSenderId: "38503738812",
  appId: "1:38503738812:web:f097c54798969126d48fb9"
};

// Inicializar App Firebase
const app = firebase.initializeApp(firebaseConfig);

function signInWithEmailAndPassword(req, res){
  const {email, password} = req.body;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    //res.send(user);
    res.redirect('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    res.send(errorCode);
  });
}

function createUserWithEmailAndPassword(req, res){
  const {name, email, password, confirmPassword } = req.body;
  if (password != confirmPassword){
    res.send('As senhas informadas não são iguais.');
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    res.send('Usuário criado com sucesso.');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.send(errorCode);
    // ..
  });
}

module.exports = { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
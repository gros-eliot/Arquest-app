import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import de mitt
//import mitt from 'mitt';


// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD92uuAPEelD5s5vTaQZf7NUgUEcY5_DDc",
    authDomain: "arquest-2022.firebaseapp.com",
    projectId: "arquest-2022",
    storageBucket: "arquest-2022.appspot.com",
    messagingSenderId: "928303473517",
    appId: "1:928303473517:web:eaf3a8ee7fade6bc897064"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

// Création d'un emetteur mitt exportable
//export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
//app.config.globalProperties.emitter = emitter;


app.use(router)

app.mount('#app')

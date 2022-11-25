// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push,
    onChildAdded,
}
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6zBg5j4VjMBwAQcaz3LU5UdrgwdMpEmw",
    authDomain: "fmp2-ecc5d.firebaseapp.com",
    projectId: "fmp2-ecc5d",
    storageBucket: "fmp2-ecc5d.appspot.com",
    messagingSenderId: "296578103108",
    appId: "1:296578103108:web:291083a838d41dc34e0911",
    measurementId: "G-HQ8B4MYT3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');


window.next = function () {
    var obj = {
        question: question.value,
        option1: option1.value,
        option2: option2.value,
        option3: option3.value,
        option4: option4.value,
    }
    console.log(obj);
    const keyref = ref(database, 'obj/');
    obj.id = push(keyref).key;
    console.log(obj.id);

    const taskref = ref(database, `obj/${obj.id}/`)
    set(taskref, obj);
}

window.render = function () {
    const taskref = ref(database, `obj/`);
    onChildAdded(taskref, function (data) {
        question.innerHTML = `${(data.val().question)}`;
    })
    optionOne();
    optionTwo(); 
    optionThree();
    optionFour();
}

function optionOne() {
    const taskReference = ref(database, 'obj/');
    onChildAdded(taskReference, function (data) {
        option1.innerHTML = `<div class="option1">${data.val().option1}</div>`;
        console.log(data.val().option1);
    })
}
function optionTwo() {
    const taskReference = ref(database, 'obj/');
    onChildAdded(taskReference, function (data) {
        option2.innerHTML = `<div class="option2">${data.val().option2}</div>`;
        console.log(data.val().option2);
    })
}
function optionThree() {
    const taskReference = ref(database, 'obj/');
    onChildAdded(taskReference, function (data) {
        option3.innerHTML = `<div class="option3">${data.val().option3}</div>`;
        console.log(data.val().option3);
    })
}
function optionFour() {
    const taskReference = ref(database, 'obj/');
    onChildAdded(taskReference, function (data) {
        option4.innerHTML = `<div class="option3">${data.val().option4}</div>`;
        console.log(data.val().option4);
    })
}







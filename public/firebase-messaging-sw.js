// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyCYHsBGxW8cH7Sqi94hqT2OhgYSSzP6J9E",
  authDomain: "contest-helper-d570a.firebaseapp.com",
  databaseURL: "https://contest-helper-d570a.firebaseio.com",
  projectId: "contest-helper-d570a",
  storageBucket: "contest-helper-d570a.appspot.com",
  messagingSenderId: "28027376772",
  appId: "1:28027376772:web:78fb55a0e797092f60ded1",
  measurementId: "G-KH6NGCW6E5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
})
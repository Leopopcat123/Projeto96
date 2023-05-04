//LINKS FIREBASE
//ADICIONE SEUS LINKS FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyC3b3zbcR7dUSfmI-snzX5xKclbpa5fl80",
      authDomain: "eassimquefazmarkting.firebaseapp.com",
      databaseURL: "https://eassimquefazmarkting-default-rtdb.firebaseio.com",
      projectId: "eassimquefazmarkting",
     storageBucket: "eassimquefazmarkting.appspot.com",
      messagingSenderId: "722971396077",
      appId: "1:722971396077:web:8d79a7409e12288137c9e4"
      };
      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      userName = localstorage.getItem("userName");
      roomName = localStorage.getItem("roomName");



      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
            })
      }

      document.getElementById("msg").value = "";




function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();

//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAJqTZCdyvym5idZXWqajmxP4wFegmXlIc",
      authDomain: "let-s-chat-44491.firebaseapp.com",
      projectId: "let-s-chat-44491",
      storageBucket: "let-s-chat-44491.appspot.com",
      messagingSenderId: "698095470780",
      appId: "1:698095470780:web:07ee1eb92a6a4c22ad68b9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send (){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                massage:msg,
                like:0
          });
          document.getElementsById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

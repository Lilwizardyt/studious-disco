var firebaseConfig = {
    apiKey: "AIzaSyBbMlxKMN_PCxdVReBMbK9ODkM7jMOvzac",
    authDomain: "eager-9105f.firebaseapp.com",
    databaseURL: "https://eager-9105f-default-rtdb.firebaseio.com",
    projectId: "eager-9105f",
    storageBucket: "eager-9105f.appspot.com",
    messagingSenderId: "773948419545",
    appId: "1:773948419545:web:bf8cf94cee645a09633dc8",
    measurementId: "G-QXJ2C30N4P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  username=localStorage.getItem("username")
  roomname=localStorage.getItem("roomname")

  function send() {
         msg = document.getElementById("msg").value; 
         firebase.database().ref(roomname).push({ 
               name:username, 
               message:msg, 
               like:0 
          }); 
          document.getElementById("msg").value =""; 
    }

    function logout(){
          localStorage.removeItem("roomname")
          localStorage.removeItem("username")
          window.location="page1.html"      
          }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name1=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>"
row=name_with_tag+messagewithtag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row
//End code
    } });  }); }
getData();


function updatelike(message_id){
    console.log(message_id)
    button_id=message_id
    likes=document.getElementById(button_id).value
    updatedlikes=Number(likes)+1
    console.log(updatedlikes)
    firebase.database().ref(roomname).child(message_id).update({
          like: updatedlikes
    });
    }
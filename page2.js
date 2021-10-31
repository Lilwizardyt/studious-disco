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
 

    username= localStorage.getItem("username")
    document.getElementById("username2").innerHTML="welcome  " + username;

    function addroom(){
          roomname=document.getElementById("roomname").value
          localStorage.setItem("roomname", roomname);
          firebase.database().ref("/").child(roomname).update({
                purpose:"adding room name"
          });
          window.location="page3.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row="<div class='room_name' id='"+Room_names+"' onclick='redirectroroomname(this.id)'>#"+Room_names+"</div><hr>"   
      document.getElementById("output").innerHTML+=row;     
      //End code
      });});}
getData();

function redirectroroomname(name){
console.log(name)
localStorage.setItem("roomname", name)
window.location="page3.html"
}

function logout(){
localStorage.removeItem("roomname")
localStorage.removeItem("username")
window.location="page1.html"      
}

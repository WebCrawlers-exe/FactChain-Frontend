let goto = document.getElementsByClassName("user")[0];
goto.addEventListener("click", function () {
  window.location.replace("./publisher.html");
});
// let result = document.getElementById('submit');
// result.addEventListener("click", function(){
//     window.location.replace('./result.html');
// })

let next = document.getElementById('next');

let userForm = document.forms[0];

next.addEventListener('click',()=>{
  document.getElementById('submit').style.display= "block";
  document.getElementById('next').style.display= "none";
  if(document.getElementById('titleCheck').checked===true){
    document.getElementById('titleInput').style.display="block";
    
    document.getElementById('titleCheck').style.display="none";
    document.getElementById('titleCheckL').style.display="none";

    document.getElementById('descCheck').style.display="none";
    document.getElementById('descCheckL').style.display="none";
  }
  else if(document.getElementById('descCheck').checked===true){
    document.getElementById('descriptionInput').style.display="block";
    document.getElementById('titleCheck').style.display="none";
    document.getElementById('titleCheckL').style.display="none";
    document.getElementById('descCheck').style.display="none";
    document.getElementById('descCheckL').style.display="none";
  }
})

userForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  if(document.getElementById('descCheck').checked===true){
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://flask-nlp-api.herokuapp.com/",true);
    const json = {
      "title":"",
      "description":document.getElementById('descriptionInput').value,
      "mode":"description"
  }
  }
  else if(document.getElementById('titleCheck').checked===true){
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://flask-nlp-api.herokuapp.com/",true);
    
    const json = {
      "title":document.getElementById('titleInput').value,
      "description":"",
      "mode":"title"
    }

    xhr.onloadstart = ()=>{
      console.log("Loading...");
      console.log(document.getElementById('titleInput').value);
    }
    xhr.onload = ()=>{
      console.log(xhr.responseText);
    }
    xhr.send(JSON.stringify(json));
  }
})

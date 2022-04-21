let form = document.getElementsByClassName("pubForm")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var json="Nothing there";
  // GETTING FORM VALUES
  const title = form.elements["title"].value;
  const desc = form.elements["description"].value;
  const pub = form.elements["publisher"].value;
  const date = new Date();

  const xhr = new XMLHttpRequest();
  console.log(xhr);
  
  xhr.open("POST","https://secure-forest-91423.herokuapp.com/api/addnews",true);
  
  xhr.onloadstart = ()=>{
    document.getElementsByClassName('loading')[0].style.display="flex";
  };

  xhr.onload = ()=>{
    console.log("Back End connected.");
    // location.href="/result.html";
  }

  xhr.onloadend = ()=>{
    document.getElementsByClassName('loading')[0].innerText="Data Published!";
    console.log(json);
    console.log(xhr.responseText);
  // document.getElementsByClassName('loading')[0].style.display="flex";
    // document.getElementsByClassName('loading')[0].style.display="none";
  }

  json = {
    "uploader_address": "0x0f21b41E227543fe3765684f8646F2c2E9519AA5",
    "title": title,
    "description": desc,
    "publisher": pub,
    "date": date,}

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(JSON.stringify(json));
});





let goto = document.getElementsByClassName("user")[0];
console.log(goto);
goto.addEventListener("click", function () {
  window.location.replace("./publisher.html");
});
// let result = document.getElementById('submit');
// result.addEventListener("click", function(){
//     window.location.replace('./result.html');
// })

let userForm = document.forms[0];

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  sessionStorage.setItem('title',userForm.elements["title"]);
  sessionStorage.setItem('desc',userForm.elements['description']);
  location.href="result.html";
});

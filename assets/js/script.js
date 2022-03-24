let goto = document.getElementsByClassName('user')[0];
console.log(goto);
goto.addEventListener("click", function(){
    window.location.replace('./user.html');
})
let result = document.getElementById('submit');
result.addEventListener("click", function(){
    window.location.replace('./result.html');
})
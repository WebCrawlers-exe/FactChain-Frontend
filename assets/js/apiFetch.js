let xhr = new XMLHttpRequest();
xhr.open("GET", "https://secure-forest-91423.herokuapp.com/api/getallnews", true);
xhr.onload = function () {
  // the response text is in json format.

  let news = JSON.parse(xhr.responseText)["news"];

  //condition to display data

  let container = document.getElementsByClassName("container")[0];

  if(news.length > 0) {
    Array.from(news).forEach((element)=>{
        console.log(element);
        container.innerHTML += `
        <div class="info">
        <div class="title">${element['title']}</div>
        <br>
        <div class="description">
            ${element['description']}
        </div>
        <div class="mark"><img src="./assets/images/Genuine mark.png"height="50px"></div>
    </div>`;
      });
    }
  else{
    container.innerHTML += `
    <div class="notFound">
          <h1>
            No Data Found
            <span style="border-bottom: 3px solid #cc4300">GENUINE</span> data
            found
          </h1>
        </div>`;
  }
  console.log(sessionStorage);
}
xhr.send();

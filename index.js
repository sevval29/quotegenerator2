document.querySelector("#btn").addEventListener("click",getApi);

function getApi(){

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => json.forEach((item) =>{
        elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = item.email;  
   }) )
    .catch((err) => console.log(err))}

   
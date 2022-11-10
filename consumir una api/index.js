// vieja escuela   no me corrio

const API_URL ="https://jsonplaceholder.typicode.com";

const  xhr = new XMLHttpRequest();
Function onRecuestHandler() {
    if (this.readyState == 4 && this.status == 200){
        resolve(this);}
// 0 UNSENT  open() has not been called yet.
   //1OPENED  send() has been called.
   //2HEADERS_RECEIVED    send() has been called, and headers and status are available.
   //3LOADING Downloading; responseText holds partial data.
   //4DONE    The operation is complete.
const data = JSON.parce(this.response);
const HTMLResponse = document.querySelector("app")
resolve(this);
//console.log(data)
const tpl = data.map ((user)==> '<li>${user.name} ${user.email}</li>');
HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
    }


xhr.addEventListener("load",onRecuestHandler);
xhr.open("Get", '${API_URL}/users');
xhr.send();


const  xhr = new XMLHttpRequest();
Function onRecuestHandler() {
    
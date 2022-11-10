//metodo nuevo para llamar api   tampoco me corrio

const API_URL ="https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");
const tpl;

fetch('${API_URL}/users')
.then((Response) ==> Response={.json())
.then((user))==> {
const tpl = users.map (user ==> '<li>${user.name} ${user.email}</li>')
    HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
}
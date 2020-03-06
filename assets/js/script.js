
const URL1 = 'https://pokeapi.co/api/v2/pokemon/';
let modalUsuario = document.getElementById("cuerpoModal");
let tituloModal = document.getElementById("tituloModal"); 

tituloModal = 'TITULO';

let tablausuarios = document.getElementById("tablausuarios");   

let  usuariosHTML = `<tr>
<th>:p</th>
<td><input id="filtroNombre"></input></td>
<td><input id="filtroEmail"></input></td>
<td><button class="btn" onclick="filtrar()">Filtrar</button></td>
</tr>`
   
fetch(URL1, {method: 'GET'})
    .then( response => {
    return response.json()
    })
    .then( respuesta => respuesta.results )
    .then( listaPokemones => {

    listaPokemones.forEach( (pokemon) => imprimeUsuario(pokemon) )
  
    })

    // .filter( user => user.username.startsWith(comienzoNombre)).filter( user => user.email.startsWith(comienzoEmail))
  
const filtrar = () => {
    
    pokemonesHTML = `<tr>
                        <th></th>
                        <td><input id="filtroNombre"></input></td>
                        <td><input id="filtroEmail"></input></td>
                        <td><button class="btn" onclick="filtrar()">Filtrar</button></td>
                    </tr>`
    var comienzoNombre = document.getElementById("filtroNombre").value;
    var comienzoEmail = document.getElementById("filtroEmail").value;
    console.log(comienzoNombre, comienzoEmail);
    
    fetch(URL1, {method: 'GET'})
    .then( response => {
    return response.json()
    })
    .then( listaUsuarios => {
    listaUsuarios.filter( user => user.username.startsWith(comienzoNombre))
    .filter( user => user.email.startsWith(comienzoEmail))
    .forEach( (usuario) => imprimeUsuario(usuario) )

} ) }

const imprimeUsuario = (pokemon) => {
           
            usuariosHTML += `<tr>
                            <th> </th>
                            <td> ${pokemon.name} </td>
                            <td> ${pokemon.url}</td>
                            <td><button class="btn" data-toggle="modal" 
                            data-target="#exampleModalCenter" onclick="toggleUsuario(${pokemon})">Detalle</button></td></tr>`
   
            tablausuarios.innerHTML = usuariosHTML

}


function toggleUsuario(ide)  {
    

    fetch(URL1, {method: 'GET'})
    .then( response => response.json())
    .then( listaUsuarios => {
                listaUsuarios.filter( user => user.id == ide).forEach( user => {
                                                   document.getElementById("tituloModal").innerHTML = `Detalle usuario #${user.id}`;
                                                    modalUsuario.innerHTML =  `<ul class="list-group">
                                                    <li class="list-group-item" id="lista">Name: ${user.name}</li>
                                                    <li class="list-group-item" id="lista">Username: ${user.username}</li>
                                                    <li class="list-group-item" id="lista">Email: ${user.email}</li>
                                                    <li class="list-group-item" id="lista"><ul class="list-group-secondary bg-gray">Address:
                                                        <li class="list-group-item" id="lista2">Street: ${user.address.street}</li>
                                                        <li class="list-group-item" id="lista2">Suite: ${user.address.suite}</li>
                                                        <li class="list-group-item" id="lista2">Zipcode: ${user.address.zipcode}</li>
                                                        <li class="list-group-item" id="lista2"><ul class="list-group">Geo:
                                                            <li class="list-group-item" id="lista3">Lat: ${user.address.geo.lat}</li>
                                                            <li class="list-group-item" id="lista3">Lng:${user.address.geo.lng}</li></ul></li>
                                                    </ul></li>
                                                    <li class="list-group-item" id="lista">Phone: ${user.phone}</li>
                                                    <li class="list-group-item" id="lista">Website: ${user.website}</li>
                                                    <li class="list-group-item" id="lista"><ul class="list-group">Company:
                                                        <li class="list-group-item" id="lista2">name: ${user.company.name}</li>
                                                        <li class="list-group-item" id="lista2">Catchphrase: ${user.company.catchPhrase}</li>
                                                       <li class="list-group-item" id="lista2">Bies: ${user.company.bs}</li></ul></li></ul>`
                    })
                })                                              

}




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
                            data-target="#exampleModalCenter" onclick="togglePokemon(${pokemon.url})">Detalle</button></td></tr>`
   
            tablausuarios.innerHTML = usuariosHTML

}


function togglePokemon(url)  {
    var URL = url;

    fetch(URL, {method: 'GET'})
    .then( response => response.json())
    .then( pokemon => {
               
                                                   document.getElementById("tituloModal").innerHTML = `Detalle Pokemon #${pokemon.forms[0].name}`;
                                                    modalUsuario.innerHTML =  `${pokemon.weight}`
                    })
              
}



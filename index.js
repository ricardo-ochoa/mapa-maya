const estados = ['Chiapas','Tabasco','Campeche','Yucatán','Quintana Roo'];

function mouseOver0() {
        document.getElementById("estado").innerHTML = estados[0];   
}
function mouseOver1() {
    document.getElementById("estado").innerHTML = estados[1];   
}
function mouseOver2() {
    document.getElementById("estado").innerHTML = estados[2];   
}
function mouseOver3() {
    document.getElementById("estado").innerHTML = estados[3];   
}
function mouseOver4() {
    document.getElementById("estado").innerHTML = estados[4]; 
}

document.getElementById('Chiapas').addEventListener("mouseover", mouseOver0);
document.getElementById("Chiapas").addEventListener("mouseout", mouseOut);

document.getElementById('Tabasco').addEventListener("mouseover", mouseOver1);
document.getElementById("Tabasco").addEventListener("mouseout", mouseOut);

document.getElementById("Campeche").addEventListener("mouseover", mouseOver2);
document.getElementById("Campeche").addEventListener("mouseout", mouseOut);

document.getElementById("Quintana").addEventListener("mouseover", mouseOver4); 
document.getElementById("Quintana").addEventListener("mouseout", mouseOut);

document.getElementById("Yucatan").addEventListener("mouseover", mouseOver3); 
document.getElementById("Yucatan").addEventListener("mouseout", mouseOut);
 

function mouseOut() {
    document.getElementById("estado").innerHTML = "";
  }

  
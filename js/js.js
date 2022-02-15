function cambiarColor() {
	let parrafos=document.getElementsByTagName("p");
	let divs=document.getElementsByTagName("div");
	for (i = 0; i < parrafos.length; i++) {
		parrafos[i].style.color="red";
		parrafos[i].innerHTML="ROJO";
	}
	for (i = 0; i < divs.length; i++) {
		divs[i].style.color="green";
		divs[i].innerHTML="VERDE";
	}
}
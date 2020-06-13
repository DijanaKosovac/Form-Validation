var boje = {
	cekiran: "Crimson",
	necekiran: "Teal"
};

function proveraForme(forma) {
 
  if(forma.ime.value.trim() == '') {
	  alert('Morate uneti ime');
	  forma.ime.focus();
	  return false;
  }

  if(forma.prezime.value.trim() == '') {
	alert('Morate uneti prezime');
	forma.prezime.focus();
	return false;
}

if(forma.ime.value[0] != forma.ime.value[0].toUpperCase()) {
	alert('Ime mora poceti velikim slovom');
	forma.ime.focus();
	return false;
}

if(forma.prezime.value[0] != forma.prezime.value[0].toUpperCase()) {
	alert('Prezime mora poceti velikim slovom');
	forma.prezime.focus();
	return false;
}
 
}

function showValue(param) {

	let sel2 = document.getElementById('sel2');

	if(param.value == 2) {
		sel2.disabled = false;
		sel2.style.visibility = 'visible';
	} else if(param.value == 1) {
		sel2.disabled = true;
		sel2.style.visibility = 'hidden';
	}

}

function showOptions() {
	let span = document.getElementById('poruka');
	let sel2 = document.getElementById('sel2');
	let checkbox = document.getElementById('cb1');
	let btn = document.getElementById('submitbtn');

	if(sel2.value == "10") {
		span.innerHTML = '10% popusta';
		checkbox.disabled = true;
		checkbox.style.backgroundColor = 'white';
	}  else if(sel2.value == '20'){
		span.innerHTML = '20% popusta';

	}else if(sel2.value == '30') {
		checkbox.disabled = false;
		btn.style.backgroundColor = boje.necekiran;
		span.innerHTML = '30% popusta';
	} else if(checkbox.checked) {
		btn.style.backgroundColor = boje.cekiran;
	}
changeColor();


}

function changeColor() {
	let btn = document.getElementById('submitbtn');
	let checkbox = document.getElementById('cb1');	
	let sel2 = document.getElementById('sel2');


	
	if(checkbox.checked) {
    btn.style.backgroundColor = boje.cekiran;
	} else if (sel2.value == '10' || sel2.value == '20') {
		btn.style.backgroundColor = 'white';

	}
	}

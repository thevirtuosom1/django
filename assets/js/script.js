/// Get DOM Elements
const modal1 = document.getElementById('1');
const modal2 = document.getElementById('2');
const modal3= document.getElementById('3');
const modal4= document.getElementById('4');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
 
// Events
window.addEventListener('click', outsideClick);
/*
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}
*/
// Close If Outside click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = 'none';
  }
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
  if (e.target == modal3) {
    modal3.style.display = 'none';
  }
  if (e.target == modal4) {
    modal4.style.display = 'none';
  }
}



/*
 	const modal = document.getElementById('#1');
	window.addEventListener('click', outsideClick);
	function outsideClick(e) { if (e.target ==modal ) { modal.style.display = 'none';}}
	
*/

	
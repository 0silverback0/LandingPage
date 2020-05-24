//declare global variables

const allSections = document.querySelectorAll('.section');
const ul = document.querySelector('ul');
let li = '';
let addHref = '';

//create a nested anchor tag in li tag and set href location

allSections.forEach(section => {
	li = document.createElement('li');
	addHref = document.createElement('a');
	addHref.setAttribute('href', '#' + section.getAttribute('data-section'));
	addHref.innerHTML = section.getAttribute('data-section');
	ul.appendChild(li);
	li.appendChild(addHref);
})

// checks to see if section is in view

function InView(sect){
	let bounding = sect.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
}

// makes each section active on scroll
let sect1 = document.getElementById('sect1');
let sect2 = document.getElementById('sect2');
let sect3 = document.getElementById('sect3');
let sect4 = document.getElementById('sect4');

//first A
const lis = document.querySelectorAll('li');
const firstLi = lis[0];
const firstA = firstLi.lastElementChild;

//second A 
const secondLi = lis[1];
const secondA = secondLi.lastElementChild;

//third A 
const thirdLi = lis[2];
const thirdA = thirdLi.lastElementChild;

//fourth A 
const fourthLi = lis[3];
const fourthA = fourthLi.lastElementChild;

addEventListener('scroll', makeActive);

function makeActive(){
	if (InView(sect1)) {
	firstA.classList.add('activeSection');
	} else {
	firstA.classList.remove('activeSection');
	}
	if (InView(sect2)) {
	secondA.classList.add('activeSection');
	} else {
	secondA.classList.remove('activeSection');
	}
	if (InView(sect3)) {
	thirdA.classList.add('activeSection');
	} else {
	thirdA.classList.remove('activeSection');
	}
	if (InView(sect4)) {
	fourthA.classList.add('activeSection');
	} else {
	fourthA.classList.remove('activeSection');
	}
	}


// sticky header

window.onscroll = function() {Stay()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function Stay() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

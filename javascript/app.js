//declare global variables

const allSections = document.querySelectorAll('.section');
const ul = document.querySelector('ul');
let li = '';
let addHref = '';
const list = [];
let data = '';
let ha = '';
let dat = '';
let aList = '';

//create a tag nested in li tag and set href location

allSections.forEach(section => {
	li = document.createElement('li');
	addHref = document.createElement('a');
	addHref.setAttribute('href', '#' + section.getAttribute('data-section'));
	addHref.innerHTML = section.getAttribute('data-section');
	ul.appendChild(li);
	li.appendChild(addHref);
})

//make list from data attribute

allSections.forEach(thing => {
    data = thing.getAttribute('data-section');
    list.push(data);
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

// does something if section is in view
let sect1 = document.getElementById('sect1');
let sect2 = document.getElementById('sect2');
let sect3 = document.getElementById('sect3');
let sect4 = document.getElementById('sect4');

//first A
const lis = document.querySelectorAll('li');
const firstLi = lis[0];
const firstA = firstLi.lastElementChild;

//secondA 
const secondLi = lis[1];
const secondA = secondLi.lastElementChild;

//thirdA 
const thirdLi = lis[2];
const thirdA = thirdLi.lastElementChild;

//fourthA 
const fourthLi = lis[3];
const fourthA = fourthLi.lastElementChild;

addEventListener('scroll', func);

function func(){
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

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
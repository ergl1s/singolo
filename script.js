//Window 
window.onload = onScroll;
window.addEventListener('scroll', onScroll);

function onScroll() {
  let ids = document.querySelectorAll('.id_active');
  let anchors = document.querySelectorAll('nav > ul > li > a');
  let HEADER_HEIGHT = ids[0].offsetHeight;
  let currentPosition = window.pageYOffset;
  ids.forEach(id => {
    if (id.offsetTop - HEADER_HEIGHT <= currentPosition && (id.offsetTop + id.offsetHeight) > currentPosition) {
      anchors.forEach(anchor => {
        anchor.classList.remove('anchor_active');
        if (id.getAttribute('id') === anchor.getAttribute('href').substring(1)) {
          anchor.classList.add('anchor_active');
        }
      })
    };
  }) 
}

//Slider
function clickOnChev(event) {
  if (!event.target.parentElement.classList.contains('wrapper_active')) {
    event.target.closest('.slider').classList.add('slider_active');
    event.target.parentElement.classList.add('wrapper_active');
    phones.forEach(item => item.parentElement.classList.add('hidden'));
  }
  else {
    event.target.closest('.slider').classList.remove('slider_active');
    event.target.closest('.wrapper').classList.remove('wrapper_active');
    phones.forEach(item => item.parentElement.classList.remove('hidden'));
  }
}

function clickOnPhone(event) {
  if (!event.target.parentElement.classList.contains('hidden-opacity')) {
    event.target.parentElement.classList.add('hidden-opacity');
  }
  else {
    event.target.parentElement.classList.remove('hidden-opacity');
  }
}
let phones = document.querySelectorAll('.iphone-body');
let chevs = document.querySelectorAll('.chev');
chevs.forEach(item => item.addEventListener('click', clickOnChev));
let phonesButtons = document.querySelectorAll('.iphone-button');
phonesButtons.forEach(item => item.addEventListener('click', clickOnPhone));

//Portfolio
function changeTabColor(event) {
  if (!event.target.classList.contains('tab_active')) {
    Array.from(tabsList.children).forEach(item => item.classList.remove('tab_active'));
    event.target.classList.add('tab_active');
    let temp = imagesList.children[0].cloneNode();
    imagesList.removeChild(imagesList.children[0]);
    imagesList.insertBefore(temp, imagesList.children[11]);
  }
}

function changeImageBorder(event) {
  if (!event.target.classList.contains('image_active')) {
    Array.from(imagesList.children).forEach(item => item.classList.remove('image_active'));
    event.target.classList.add('image_active');
  }
  else {
    event.target.classList.remove('image_active');
  }
}

let tabsList = document.querySelector('#portfolio > div > ul');
let temp = 0; 
tabsList.children[0].classList.add('tab_active');
tabsList.addEventListener('click', () => changeTabColor(event));
let imagesList = document.querySelector('#portfolio > div > div');
imagesList.addEventListener('click', () => changeImageBorder(event));

//Get a Quote
function onSubmit() {
  event.preventDefault();
  message.children[1].innerText = document.getElementById('subject-input').value == '' ? 'Without subject' : 'Subject: ' + document.getElementById('subject-input').value;
  message.children[2].innerText = textarea.value == '' ? 'Without description' : 'Description: ' + textarea.value;
  messageBlock.classList.remove('hidden');
}

function onCloseBtn() {
  form.reset();
  messageBlock.classList.add('hidden');
}
let messageBlock = document.getElementById('message-block');
let submitBtn = document.getElementById('submit');
let closeBtn = document.getElementById('close-button');
let form = document.querySelector('form');

submitBtn.addEventListener('click', () => {
  if (form.checkValidity())
    onSubmit(event);
});
closeBtn.addEventListener('click', () => onCloseBtn())
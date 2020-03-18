//Header
function scrollToAnchor(event) {
  if (event.target.tagName == 'A') {
    anchors.forEach(item => item.classList.remove('anchor_active'));
    event.target.classList.add('anchor_active');
    let index = Array.from(anchorsList.children).map(item => item.children[0]).indexOf(event.target);
    if (index == 0) {
      window.scrollTo(0, 0);
    } 
    else if (index == 1) {
      window.scrollTo(0, 600);
    } 
    else if (index == 2) {
      window.scrollTo(0, 1100);
    }
    else if (index == 3) {
      window.scrollTo(0, 1967);
    }
    else if (index == 4) {
      window.scrollTo(0, 2703);
    }
  }
}

let anchors = document.querySelectorAll('nav > ul > li > a');
let anchorsList = document.querySelector('nav > ul');
anchorsList.addEventListener('click', () => scrollToAnchor(event));
anchors[0].classList.add('anchor_active'); 

//Slider
function clickOnChev() {
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
  if (!event.target.children[0].classList.contains('hidden')) {
    event.target.children[0].classList.add('hidden');
  }
  else {
    event.target.children[0].classList.remove('hidden');
  }
}
let chevs = document.querySelectorAll('.chev');
chevs.forEach(item => item.addEventListener('click', () => clickOnChev(event)));
let phones = document.querySelectorAll('.iphone-body');
phones.forEach(item => item.addEventListener('click', () => clickOnPhone(event)));

//Portfolio
function changeTabColor(event) {
  if (!event.target.classList.contains('tab_active')) {
    Array.from(tabsList.children).forEach(item => item.classList.remove('tab_active'));

    event.target.classList.add('tab_active');
    Array.from(imagesList.children).forEach((item, index) => {
      let current =  index - temp <= 0 ? index - temp + 12 : index - temp;
      item.src = `assets/image_${current}.svg`
      item.alt = `image_${current}`;
      if (item.classList.contains('image_active')) {
        item.classList.remove('image_active');
      }
    });
    temp ++;
    if (temp == 12) temp = 0;
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
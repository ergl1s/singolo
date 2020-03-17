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
function changeTabColor(item) {
  if (item.disabled) return;
  tabs.forEach(item => {
    item.disabled = false;
    item.style.color = '#767e9e';
    item.style.borderColor = '#666d89';
  });

  item.style.color = '#c5c5c5';
  item.style.borderColor= '#c5c5c5';
  item.disabled = true; 

  images.forEach((item, index) => {
    let current =  index - temp <= 0 ? index - temp + 12 : index - temp;
    item.src = `assets/image_${current}.svg`
    item.alt = `image_${current}`;
    if (item.style.borderWidth == '5px') {
      item.style.borderWidth = '0px';
      item.style.left = '0px';
      item.style.top = '0px';
    }
  });
  temp ++;
  if (temp == 12) temp = 0;
}

function changeImageBorder(item) {
  if (item.style.borderWidth != '5px') {
    images.forEach(item => {
      item.style.borderWidth = '0px';
      item.style.left = '0px';
      item.style.top = '0px';
    });
    
    if (item.style.borderColor != '#F06C64') {
    item.style.border = '5px solid #F06C64';
    item.style.left = '-5px';
    item.style.top = '-5px';
    }
  }
  else {
    item.style.borderWidth = '0px';
    item.style.left = '0px';
    item.style.top = '0px';
  }
}

let tabs = document.querySelectorAll('#portfolio > div > ul > li');
let temp = 0; 
tabs[0].style.color = '#c5c5c5';
tabs[0].style.borderColor = '#c5c5c5';
tabs.forEach(item => item.addEventListener('click', () => changeTabColor(item)));
let images = document.querySelectorAll('#portfolio > div > div > img');
images.forEach(item => {
  item.style.position = 'relative';
  item.addEventListener('click', () => changeImageBorder(item))
});

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
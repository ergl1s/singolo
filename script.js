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

//Header
menuBg = document.querySelector(".mobile-menu-bg")
menuWrapper = document.querySelector('.mobile-menu-wrapper');
burger = document.querySelector('.burger-button');

function hide () {
  menuBg.classList.add('hidden');
};

burger.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('burger-button_active')) {
    event.currentTarget.classList.remove('burger-button_active');
    menuBg.classList.add('hidden-opacity');
    menuWrapper.classList.remove('mobile-menu-wrapper_active');
    menuBg.addEventListener('transitionend', hide);
  }
  else {
    menuBg.removeEventListener('transitionend', hide);
    menuBg.classList.remove('hidden');
    setTimeout(() => {
      menuBg.classList.remove('hidden-opacity');
    }, 1);
    event.currentTarget.classList.add('burger-button_active');
    menuWrapper.classList.add('mobile-menu-wrapper_active');
  }
})

menuBg.addEventListener('click', () => {
  burger.classList.remove('burger-button_active');
  menuBg.classList.add('hidden-opacity');
  menuWrapper.classList.remove('mobile-menu-wrapper_active');
  menuBg.addEventListener('transitionend', hide);
});

document.querySelector(".mobile-menu-wrapper > nav > ul").addEventListener('click', (e) => {
  if (e.target.getAttribute('href') != undefined)
    setTimeout(() => {
      menuBg.click();
    }, 250);
})

//Slider
function clickOnPhone(event) {
  if (!event.target.parentElement.classList.contains('hidden-opacity')) {
    event.target.parentElement.classList.add('hidden-opacity');
  }
  else {
    event.target.parentElement.classList.remove('hidden-opacity');
  }
}

function onChevLeft() {
  if (animationFlag) return;
  if(slider.classList.contains('slider_active')) {
    slider.classList.remove('slider_active');
    let leftPos = 10; 
    let bgPos = 52;
    setTimeout(function go() {
      animationFlag = true;
      if (leftPos <= phonesShift) {
        phones[0].style.left = `${leftPos - phonesShift + phoneStartLeft}px`;
        phones[1].style.left = `${leftPos - phonesShift + phoneStartRight}px`;
      }
      if (bgPos <= bgPosRight)
        sliderWrapper.style.backgroundPosition = `${bgPos}% 50%`;
      if(leftPos <= phonesShift || bgPos <= bgPosRight) 
        setTimeout(go, 5);
      else {
        phones[0].style.left = `${phoneStartLeft}px`;
        phones[1].style.left = `${phoneStartRight}px`;
        sliderWrapper.style.backgroundPosition = `${bgPosRight}% 50%`; 
        animationFlag = false;
      }
      leftPos += 10;
      bgPos += 2;
    }, 5);
  }
  else {
    sliderWrapper.classList.add('wrapper_active');
    sliderWrapper.style.backgroundPosition = `${bgPosLeft}% 50%`;
    slider.classList.add('slider_active');
    let leftPos = 10;
    let bgPos = bgPosLeft - 36;
    setTimeout(function go() {
      animationFlag = true;
      if (leftPos <= phonesShift) {
        phones[0].style.left = `${phoneStartLeft + leftPos}px`;
        phones[1].style.left = `${phoneStartRight + leftPos}px`;
      }
      if (bgPos <= 50) 
        sliderWrapper.style.backgroundPosition = `${bgPos}% 50%`;
      if(leftPos <= phonesShift || bgPos <= 50) 
        setTimeout(go, 5);
      else {
        sliderWrapper.style.backgroundPosition = `${50}% 50%`;
        phones[0].style.left = `${phoneStartLeft + phonesShift}px`;
        phones[1].style.left = `${phoneStartRight + phonesShift}px`;
        animationFlag = false;
      }
      leftPos += 10;
      bgPos += 2;
    }, 5);
  }
}

function onChevRight() {
  if(animationFlag) return;
  if(slider.classList.contains('slider_active')) {
    slider.classList.remove('slider_active');
    let leftPos = 10; 
    let bgPos = 48;
    setTimeout(function go() {
      animationFlag = true;
      if (leftPos <= phonesShift) {
        phones[0].style.left = `${phonesShift - leftPos + phoneStartLeft}px`;
        phones[1].style.left = `${phonesShift - leftPos + phoneStartRight}px`;
      }
      if (bgPos >= bgPosLeft)
        sliderWrapper.style.backgroundPosition = `${bgPos}% 50%`;
      if(leftPos <= phonesShift || bgPos >= bgPosLeft) 
        setTimeout(go, 5);
      else {
        phones[0].style.left = `${phoneStartLeft}px`;
        phones[1].style.left = `${phoneStartRight}px`;
        sliderWrapper.style.backgroundPosition = `${bgPosLeft}% 50%`; 
        animationFlag = false;
      }
      leftPos += 10;
      bgPos -= 2;
    }, 5);
  }
  else {
    sliderWrapper.classList.add('wrapper_active');
    sliderWrapper.style.backgroundPosition = `${bgPosRight}% 50%`;
    slider.classList.add('slider_active');
    let leftPos = phonesShift - 10;
    let bgPos = bgPosRight + 36;
    setTimeout(function go() {
      animationFlag = true;
      if (leftPos > 0) {
        phones[0].style.left = `${phoneStartLeft - phonesShift + leftPos}px`;
        phones[1].style.left = `${phoneStartRight - phonesShift + leftPos}px`;
      }
      if (bgPos >= 50) 
        sliderWrapper.style.backgroundPosition = `${bgPos}% 50%`;
      if(leftPos > 0 || bgPos >= 50) 
        setTimeout(go, 5);
      else {
        sliderWrapper.style.backgroundPosition = `${50}% 50%`;
        phones[0].style.left = `${phoneStartLeft - phonesShift}px`;
        phones[1].style.left = `${phoneStartRight - phonesShift}px`; 
        animationFlag = false;
      }
      leftPos -= 10;
      bgPos -= 2;
    }, 5);
  }
}

let animationFlag = false; 
let phoneStartLeft = 2;
let phoneStartRight = -124; 
let phonesShift = 915;
let bgPosLeft = -105;
let bgPosRight =  205; 
let slider = document.querySelector('.slider');
let sliderWrapper = document.querySelector('.slider .wrapper');
let phones = document.querySelectorAll('.iphone');
let chevLeft = document.querySelector('.chev-left-container');
let chevRight = document.querySelector('.chev-right-container');

chevLeft.addEventListener('click', onChevLeft);
chevRight.addEventListener('click', onChevRight);

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
  if (event.target.classList.contains('portfolio-image')) {
    if (!event.target.classList.contains('image_active')) {
      Array.from(imagesList.children).forEach(item => item.classList.remove('image_active'));
      event.target.classList.add('image_active');
    }
    else {
      event.target.classList.remove('image_active');
    }
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
closeBtn.addEventListener('click', () => onCloseBtn());
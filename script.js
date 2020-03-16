//Header
function changeHeaderColor(item) {
  anchors.forEach(item => item.style.color = "#fff");
  item.style.color = "#f06c64";
}

function scrollToAnchor(item, index) {
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
  changeHeaderColor(item);
}

let anchors = document.querySelectorAll("nav > ul > li > a");
anchors[0].style.color = "#f06c64";
anchors.forEach((item, index) => item.addEventListener("click", () => scrollToAnchor(item, index)));

//Slider
function clickOnChev () {
  if (sliderBool) {
    sliderWrapper.style = "background: url(assets/slider.png)";
    sliderWrapper.parentElement.style.borderColor = "#4d8cf4";
    phones.forEach(item => item.parentElement.style.display = "none");
    sliderWrapper.parentElement.style.backgroundColor = "#4d8cf4";
    sliderBool = false; 
  }
  else {
    sliderWrapper.style = "background: none";
    sliderWrapper.parentElement.style.backgroundColor = "#f06c64";
    sliderWrapper.parentElement.style.borderColor = "#ea676b";
    phones.forEach(item => item.parentElement.style.display = "block");
    sliderBool = true;
  }
}

function clickOnPhone (item) {
  if(item.disabled) { 
    item.children[0].style.display = "block";
    item.disabled = false;
  }
  else {
    item.children[0].style.display = "none";
    item.disabled = true;
  }
}

let chevRight = document.querySelector(".chev-right-container");
let chevLeft = document.querySelector(".chev-left-container");
let sliderBool = true;
chevRight.addEventListener("click", () => clickOnChev());
chevLeft.addEventListener("click", () => clickOnChev());
let sliderWrapper = document.querySelector(".slider > div");
let phones = document.querySelectorAll(".iphone-body");

phones.forEach(item => {
  item.disabled = false;
  item.addEventListener("click", () => clickOnPhone(item));
});

//Portfolio
function changeTabColor(item) {
  if (item.disabled) return;
  tabs.forEach(item => {
    item.disabled = false;
    item.style.color = "#767e9e";
    item.style.borderColor = "#666d89";
  });

  item.style.color = "#c5c5c5";
  item.style.borderColor= "#c5c5c5";
  item.disabled = true; 

  images.forEach((item, index) => {
    let current =  index - temp <= 0 ? index - temp + 12 : index - temp;
    item.src = `assets/image_${current}.svg`
    item.alt = `image_${current}`;
    if (item.style.borderWidth == "5px") {
      item.style.borderWidth = "0px";
      item.style.left = "0px";
      item.style.top = "0px";
    }
  });
  temp ++;
  if (temp == 12) temp = 0;
}

function changeImageBorder(item) {
  if (item.style.borderWidth != "5px") {
    images.forEach(item => {
      item.style.borderWidth = "0px";
      item.style.left = "0px";
      item.style.top = "0px";
    });
    
    if (item.style.borderColor != "#F06C64") {
    item.style.border = "5px solid #F06C64";
    item.style.left = "-5px";
    item.style.top = "-5px";
    }
  }
  else {
    item.style.borderWidth = "0px";
    item.style.left = "0px";
    item.style.top = "0px";
  }
}

let tabs = document.querySelectorAll("#portfolio > div > ul > li");
let temp = 0; 
tabs[0].style.color = "#c5c5c5";
tabs[0].style.borderColor = "#c5c5c5";
tabs.forEach(item => item.addEventListener("click", () => changeTabColor(item)));
let images = document.querySelectorAll("#portfolio > div > div > img");
images.forEach(item => {
  item.style.position = "relative";
  item.addEventListener("click", () => changeImageBorder(item))
});

//Get a Quote
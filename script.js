// Select all / deslect all checkboxes
function selectAll(e) {
  var checkboxes = document.getElementsByName("isChecked");

  if (e.checked) {
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  } else {
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
}

// Modal Controls
// Get Modal Element
let modal = document.getElementById('simpleModal');
// Get open Modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//click event open
// modalBtn.addEventListener('click', openModal);

//click event close
closeBtn.addEventListener('click', closeModal);

// Click outside Modal
window.addEventListener('click', clickOutside)

//function to open modal
function openModal() {
  modal.style.display = 'block'
}

//function to close modal
function closeModal() {
  modal.style.display = 'none'
}

//function to close modal if outside click
function clickOutside(e) {
  if(e.target==modal){
  modal.style.display = 'none'
  }
}

// Overlay Conrols
// get overlay element
let overlay = document.getElementById('promptOverlay')

// get delete badge button
let delBtn = document.getElementById('deleteBadge')

// get confirm delete badge button
let yesDelBtn = document.getElementById('yesDel');

// get deny delete badge button
let noDelBtn = document.getElementById('noDel');

// click event delete
// delBtn.addEventListener('click', promptDel);

yesDelBtn.addEventListener('click', yesDeleteBadge);

noDelBtn.addEventListener('click', closeOverlay);

// function to prompt delete
function promptDel() {
  overlay.style.display = 'block'
}

// function close overlay
function closeOverlay() {
  overlay.style.display='none'
}

// function yes delete
function yesDeleteBadge() {
  let i, obj = document.getElementsByClassName('textArea');
   for(i= obj.length; i--;){
        obj[i].innerHTML=""
   }
   closeOverlay()
}


const badge = document.querySelector('#badge');
badge.addEventListener('click', doSomething, false);

function doSomething(e) {
  if(e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    console.log(clickedItem)
    if(clickedItem === "modalBtn") {
      openModal()
    } else if(clickedItem === "deleteBadge"){
      promptDel()
    }else{""}
}

  e.stopPropagation()
}
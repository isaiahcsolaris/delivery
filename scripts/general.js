//FOR MOBILE NAVBAR CLASS TOGGLE

let navBtn = document.querySelector('.mobile-nav-btn');
let nav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', ()=> {

  navBtn.classList.toggle('nav-option');
  nav.classList.toggle('nav-option');
  
});

//track input


function searchFunction(){
  if(document.querySelector('.index-track-input').value == 'PR-OD-45yeo-93ii-3ooy'){
    window.location = "pages/track.html";
  }
  else{
    alert(`Enter Valid\nTracking Id`);
    location.reload();
  }
}

document.querySelector('.search-btnz').addEventListener('click', searchFunction);

// for second search input

function searchFunction2(){
  if(document.querySelector('.index-track-input2').value == 'PR-OD-45yeo-93ii-3ooy'){
    window.location = "pages/track.html";
  }
  else{
    alert(`Enter Valid\nTracking Id`);
    location.reload();
  }
}

document.querySelector('.search-btnz2').addEventListener('click', searchFunction2);
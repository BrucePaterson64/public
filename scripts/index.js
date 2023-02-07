// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const tbody = document.getElementById("tbody1");
const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guides = doc.data();
      const li = `
         <tbody><tr><td>${guides.check}</td><td contenteditable="true">OK</td><td>R</td><td>Sn</td><td>NA</td></tr></tbody>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }

  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
  
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

});
 $(".top").on("click", function() {
  
  if($(this).siblings('.level').css("display") == "block") {
     
      $(this).siblings('.level').hide();
    } else {
      $(this).siblings('.level').show();
    }
  });
 
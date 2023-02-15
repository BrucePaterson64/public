// DOM elements
const L1List = document.querySelector('.level1');
const L2List = document.querySelector('.level2');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

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
const setupL1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td><td>OK</td><td>Rfd</td><td>Sn</td><td>NA</td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    L1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupL2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td><td>OK</td><td>Rfd</td><td>Sn</td><td>NA</td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      L2List.innerHTML = html;
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

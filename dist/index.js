// DOM elements
const L1List = document.querySelector('.level1');
const L2List = document.querySelector('.level2');
const Lt1List = document.querySelector('.lights1');
const Lt2List = document.querySelector('.lights2');
const C1List = document.querySelector('.con1');
const C2List = document.querySelector('.con2');
const U1List = document.querySelector('.und1');
const U2List = document.querySelector('.und2');
const T1List = document.querySelector('.tyr1');
const T2List = document.querySelector('.tyr2');
const P1List = document.querySelector('.pre1');
const P2List = document.querySelector('.pre2');
const R1List = document.querySelector('.road1');
const R2List = document.querySelector('.road2');

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
        <tr><td>${l1.check}</td><td></td><td></td><td></td><td></td></tr>
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
          <tr><td>${l2.check}</td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      L2List.innerHTML = html;
    } 
};
const setupLt1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    Lt1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupLt2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      Lt2List.innerHTML = html;
    } 
};

const setupC1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    C1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupC2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      C2List.innerHTML = html;
    } 
};
const setupU1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    U1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupU2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      U2List.innerHTML = html;
    } 
};
const setupT1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    T1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupT2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      T2List.innerHTML = html;
    } 
};
const setupP1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    P1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupP2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      P2List.innerHTML = html;
    } 
};
const setupR1 = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const l1 = doc.data();
      const li = `
        <tr><td>${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
      `;
    html += li;
    });
    document.getElementById("mainContainer").style.display='block';
    document.getElementById("loggedout").style.display='none';
    R1List.innerHTML = html
  } else {
    console.log("Logged Out");
    document.getElementById("loggedout").style.display='block';
    document.getElementById("mainContainer").style.display='none';
    loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
  }
};
  const setupR2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const l2 = doc.data();
        const li = `
          <tr><td>${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      R2List.innerHTML = html;
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

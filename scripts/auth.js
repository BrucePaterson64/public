
auth.onAuthStateChanged(user => {
    if (user) {
      
        db.collection('report').where("title", "==", "Levels").get().then(snapshot => {
          let guides=[]
          snapshot.docs.forEach(doc => {
            guides.push({ ...doc.data(), id: doc.id })
        })
          setupGuides(snapshot.docs);
          setupUI(user);
           
           });
    } else {
        setupUI();
        setupGuides([]);
    }
  })
  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location ="index.html";
  });
  const moblogout = document.querySelector('#mob-logout');
  moblogout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location ="index.html";
  });
  const home = document.querySelector('#home');
  home.addEventListener('click', (e) => {
    window.location ="index.html";
  });
  
  
  const report = document.querySelector('#report');
  report.addEventListener('click', (e) => {
    e.preventDefault();
    window.location ="report.html";
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      })
      .catch(function(error){
        document.getElementById("fail").innerHTML = "Incorrect email or password";
      loginForm.reset();
    
      });
  
  });
  





import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query,  where, getDocs, orderBy, startAfter, limit, getCountFromServer, serverTimestamp, getDoc, setDoc
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebase from 'firebase/compat/app';
    

const firebaseConfig = {
    apiKey: "AIzaSyDZWZGRwloPXUh5GfmmsHmydehNdGz_mUQ",
    authDomain: "a2b-data.firebaseapp.com",
    projectId: "a2b-data",
    storageBucket: "a2b-data.appspot.com",
    messagingSenderId: "164488591600",
    appId: "1:164488591600:web:9e884ef3eea6a962336a35"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const colRef = collection(db, 'report')
const addColRef = collection(db, 'result')
const addCarRef = collection(db, 'vehicles')

const q = query(colRef, where("title", "==", "Levels"))
const lig = query(colRef, where("title", "==", "Lights"));
const con= query(colRef, where("title", "==", "Controls"));
const und = query(colRef, where("title", "==", "Underside"));
const tyr = query(colRef, where("title", "==", "Tyres"));
const pre = query(colRef, where("title", "==", "Presentation"));
const road = query(colRef, where("title", "==", "RoadTest"));
const snapshot = await getCountFromServer(q);
const snapshotl = await getCountFromServer(lig);
const snapshot2 = await getCountFromServer(con);
const snapshot3 = await getCountFromServer(und);
const snapshot4 = await getCountFromServer(tyr);
const snapshot5 = await getCountFromServer(pre);
const snapshot6 = await getCountFromServer(road);
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
const LU1List = document.querySelector('.LU1');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
var levelNum = snapshot.data().count;
var lightNum = snapshotl.data().count;
var conNum = snapshot2.data().count;
var undNum = snapshot3.data().count;
var tyrNum = snapshot4.data().count;
var preNum = snapshot5.data().count;
var roadNum = snapshot6.data().count;
if (levelNum % 2 == 1){
    levelNum = levelNum +1;
  } else {
    levelNum = levelNum;
}
if (lightNum % 2 == 1){
    lightNum = lightNum +1;
  } else {
    lightNum = lightNum;
}
if (conNum % 2 == 1){
    conNum = conNum +1;
  } else {
    conNum = conNum;
}
if (undNum % 2 == 1){
    undNum = undNum +1;
  } else {
    undNum = undNum;
}
if (tyrNum % 2 == 1){
    tyrNum = tyrNum +1;
  } else {
    tyrNum = tyrNum;
}
if (preNum % 2 == 1){
    preNum = preNum +1;
  } else {
    preNum = preNum;
}
if (roadNum % 2 == 1){
    roadNum = roadNum +1;
  } else {
    roadNum = roadNum;
}
var lim = levelNum /2;
var lim1 = lightNum /2;
var lim2 = conNum /2;
var lim3 = undNum /2;
var lim4 = tyrNum /2;
var lim5 = preNum /2;
var lim6 = roadNum /2;

var load = query(q, 
    orderBy("timestamp", "asc"), 
    limit(lim));
var load1 = query(lig, 
    orderBy("timestamp", "asc"), 
    limit(lim1));
var load2 = query(con, 
    orderBy("timestamp", "asc"), 
    limit(lim2));
var load3 = query(und, 
    orderBy("timestamp", "asc"), 
    limit(lim3));
var load4 = query(tyr, 
    orderBy("timestamp", "asc"), 
    limit(lim4));
var load5 = query(pre, 
    orderBy("timestamp", "asc"), 
    limit(lim5));
var load6 = query(road, 
    orderBy("timestamp", "asc"), 
    limit(lim6));

const data = await getDocs(load);
const data1 = await getDocs(load1);
const data2 = await getDocs(load2);
const data3 = await getDocs(load3);
const data4 = await getDocs(load4);
const data5 = await getDocs(load5);
const data6 = await getDocs(load6);
const latestDoc =  data.docs[data.docs.length-1];
const latestDoc1 =  data1.docs[data1.docs.length-1];
const latestDoc2 =  data2.docs[data2.docs.length-1];
const latestDoc3 =  data3.docs[data3.docs.length-1];
const latestDoc4 =  data4.docs[data4.docs.length-1];
const latestDoc5 =  data5.docs[data5.docs.length-1];
const latestDoc6 =  data6.docs[data6.docs.length-1];
var next = query(q,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc),
    limit(lim));
var next1 = query(lig,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc1),
    limit(lim1));
var next2 = query(con,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc2),
    limit(lim2));  
var next3 = query(und,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc3),
    limit(lim3));  
var next4 = query(tyr,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc4),
    limit(lim4));      
var next5 = query(pre,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc5),
    limit(lim5));  
var next6 = query(road,
    orderBy("timestamp", "asc"),
    startAfter(latestDoc6),
    limit(lim6)); 
const data_next = await getDocs(next);
const data_next1 = await getDocs(next1);
const data_next2 = await getDocs(next2);
const data_next3 = await getDocs(next3);
const data_next4 = await getDocs(next4);
const data_next5 = await getDocs(next5);
const data_next6 = await getDocs(next6); 

const setupUI = (user) => {
    if (user) {load6
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  };
  const setupL1 = (data) => {
    if (data.length) {
      let html = '';
        data.forEach((doc, index) => {
          const l1 = doc.data();
          const {id} = doc;
          const li = `
          <tr>
          <td id="check_L1_${index}">${l1.check}</td>
          <td id="ok_Lev1_${index}" data-id="${id}"></td>
          <td id="rec_Lev1_${index}" data-id="${id}"></td>
          <td id="due_Lev1_${index}" data-id="${id}"></td>
          <td id="na_Lev1_${index}" data-id="${id}"></td>
          </tr>
          `;
          html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      L1List.innerHTML = html
    } else {
      
      document.getElementById("loggedout").style.display='block';
      document.getElementById("mainContainer").style.display='none';
      loggedout.innerHTML = '<h5 class="center-align">Login to view inspection report</h5>';
    }
  };
  
  const setupL2 = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_l2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      L2List.innerHTML = html;
    } 
};
const setupLt1 = (data1) => {
  if (data1.length) {
    let html = '';
    data1.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="checkl_lt1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_lt2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
    data.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="check_c1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_c2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
    data.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="check_u1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_u2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
    data.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="checkl_t1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_t2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
    data.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="check_p1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_p2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
    data.forEach((doc, index) => {
      const l1 = doc.data();
      const {id} = doc;
      const li = `
      <tr><td id="check_r1_${index}" data-id="${id}">${l1.check}</td></td><td></td><td></td><td></td><td></td></tr>
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
      data.forEach((doc, index) => {
        const l2 = doc.data();
        const {id} = doc;
        const li = `
        <tr><td id="check_r2_${index}" data-id="${id}">${l2.check}</td></td><td></td><td></td><td></td><td></td></tr>
        `;
      html += li;
      });
      document.getElementById("mainContainer").style.display='block';
      document.getElementById("loggedout").style.display='none';
      R2List.innerHTML = html;
    } 
};



onAuthStateChanged(auth, (user) => {
        if (user) {
         
        data.forEach((doc) => {
            setupL1(data.docs);
        })
        data_next.forEach((doc) => {
            setupL2(data_next.docs);
        });
        data1.forEach((doc) => {
          setupLt1(data1.docs);
        });
        data_next1.forEach((doc) => {
          setupLt2(data_next1.docs);
        });
        data2.forEach((doc) => {
          setupC1(data2.docs);
        });
        data_next2.forEach((doc) => {
          setupC2(data_next2.docs);
        });
        data3.forEach((doc) => {
          setupU1(data3.docs);
        });
        data_next3.forEach((doc) => {
          setupU2(data_next3.docs);
        });
        data4.forEach((doc) => {
          setupT1(data4.docs);
        });
        data_next4.forEach((doc) => {
          setupT2(data_next4.docs);
        });
        data5.forEach((doc) => {
          setupP1(data5.docs);
        });
        data_next5.forEach((doc) => {
          setupP2(data_next5.docs);
        });
        data6.forEach((doc) => {
          setupR1(data6.docs);
        });
        data_next6.forEach((doc) => {
          setupR2(data_next6.docs);
        });
             setupUI(user);
    } else {
            setupUI();
            setupL1([]);
            setupL2([]);
    }
  })

// search reg number from report.html
const regNum = document.querySelector('.searchregno')
if (regNum) {
  regNum.addEventListener("click", async function () {
  let rn = document.getElementById("regNo").value;
  const qrn = query(addCarRef, where("reg", "==", rn))
  const querySnapshot = await getDocs(qrn);
  const setupLU1 = (querySnapshot) => {
    if (!querySnapshot.empty){
      let html = '';
      querySnapshot.forEach((doc) => {
        
      const lu2 = doc.data();
      const li = `
        <tr>
          <td style="text-transform:uppercase"><a href="search.html?id=${doc.id}">${lu2.reg}</a></td><td style="text-transform:uppercase">${lu2.vehicle}</td><td>${lu2.date}</td>
        </tr>
        `;
        html += li;
        });
        LU1List.innerHTML = html
        } else {
          console.log("Uh Oh!");
          const noRecords = "No Records Found!";
          document.getElementById("nrf").innerHTML = noRecords;
        };
      }  
        querySnapshot.forEach((doc) => {
        setupLU1(querySnapshot.docs);
    })   
  })
};

onSnapshot(q, (snapshot) => {
  let report = []
  snapshot.docs.forEach(doc => {
    report.push({ ...doc.data(), id: doc.id })
  })
})
const onCellClick = (e) => {
    const {target} = e; // This is the object that was clicked
    const row = target.parentNode; // The parent, in this case a <tr>
    const isActive = target.classList.contains("active"); // Is the cell already active?
    const cells = row.getElementsByTagName("td"); // All the <td> elements in the row
    
    Array.from(cells).forEach(c => {
      c.classList.remove("active");
    });
    
    if (isActive) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
  let cBody = document.querySelectorAll(".clickable tbody");
  cBody.forEach(box => {
    box.addEventListener('click', function(e) {
      onCellClick(e);
    })
  });
  
  
  

    // Test Report button
    const loadSelections = document.querySelector('.selections')
    if (loadSelections){
    loadSelections.addEventListener("click", async function () {
    const reg = document.getElementById('reg').value;
    const dt = document.getElementById("dt").value;
    const idQuery = query(addCarRef, where("reg", "==", reg));
    const querySnapshot = await getDocs(idQuery);
    console.log(querySnapshot);
    const selected_td = document.querySelectorAll(".clickable .active");
    selected_td.forEach(sel => {
    const dataId = sel.dataset.id;
    const sel_id = sel.id;
    const sliced = sel_id.slice(0, 3);
    const slicedId = sel_id.substring(3);
    const newSliced = sliced.replace(/_/g,"");
    const newSlicedId = slicedId.replace(/_/g,"");
    querySnapshot.forEach((doc) => { 
    const docRef = doc(db, "vehicles", doc.id, "results", "id"); 
     
        setDoc(docRef,{
        reference : dataId,
        check : newSlicedId,
        result : newSliced,
        date : dt
        })              
          });
      })
    })
  }

  const loadItems = document.querySelector('.upload')
  if (loadItems){
    loadItems.addEventListener("click", () => {
    var head = document.getElementById("heading").value;
    var check = document.getElementById("check").value;
      addDoc(colRef,{
        title: head,
        check: check,
        timestamp: serverTimestamp()
      
      })
    })
  }
   // Continue to Report button
  const addResultForm = document.querySelector('.rept')
  if (addResultForm){
  addResultForm.addEventListener("click", (e) => {
    e.preventDefault();
    var dt = document.getElementById("dt").value;
    var reg = document.getElementById('reg').value;
    var miles = document.getElementById("miles").value;
    var vehicle = document.getElementById("vehicle").value;
    var service = document.getElementById("service").value;
    if (dt =="" || car ==""|| reg ==""|| miles == ""){
      repWarn.innerHTML = '<h5 class="center-align" style="color:red; font-size:24px">Please complete all fields!!</h5>';
      } else {
      addDoc(addCarRef,{
        date : dt,
        vehicle : vehicle,
        reg : reg,
        miles : miles,
        lastServiceDate :service
    })
    .then(() => {
      
          document.getElementById("car").style.display='block';
          document.getElementById("dealer").style.display='none';
          document.getElementById("repWarn").style.display='none';
        })
    }
  })
}
const getResultForm = document.querySelector('.searchedRept')
  if (getResultForm){
  getResultForm.addEventListener("click", async (e) => {
    e.preventDefault();
    var reg = document.getElementById('reg').value;
    var service = document.getElementById("dt").value;
    var make = document.getElementById("vehicle").value;

    const getData = query(addColRef, where("reg", "==", reg), where("date", "==", service))
    const ret = await getDocs(getData);
    ret.forEach(async (doc) => {
    const retData = doc.data();
    console.log(retData.reference); // Reference in result document
    console.log(doc.id); // ID of result document
          //const getCheck = query(colRef, where(doc.id, "==", retData.reference));
          //const ret2 = await getDocs(getCheck);
          //ret2.forEach( async (snapshot) => {
             //const gotData = snapshot.data();
              //console.log(retData.reference);
              //console.log(gotData.check);
           // })
    console.log(retData.check, " - ", retData.result);
    });
        document.getElementById("car").style.display='block';
        document.getElementById("dealer").style.display='none';
        document.getElementById("manuf").innerHTML = make;
        document.getElementById("num").innerHTML = reg;
        document.getElementById("lastDate").innerHTML = service;
      })
    }
 
  
   // login
   const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm['login-email'].value;
      const password = loginForm['login-password'].value;
 
     signInWithEmailAndPassword(auth, email, password).then((cred) => {
      const modal = document.querySelector('#modal-login');
       M.Modal.getInstance(modal).close();
       loginForm.reset();
       })
       .catch(function(error){
        document.getElementById("fail").innerHTML = "Incorrect email or password";
        loginForm.reset();
     
       })
    })
    const logout = document.querySelector('#logout');
      logout.addEventListener('click', () => {
        signOut(auth).then(() => {
        window.location ="index.html";
    })
})
 
  
    const moblogout = document.querySelector('#mob-logout');
    moblogout.addEventListener('click', () => {
    signOut(auth).then(() => {
    window.location ="index.html";
    })
  .catch((err) =>{
    console.log(err.message)
  })
})
function searchReg(){

  window.location ="index.html";
}


const getDat = document.querySelector('.repData');
if (getDat){
getDat.addEventListener('click', async () => {
const table_data = document.querySelector(".clickable");
const selected_td = document.querySelectorAll(".clickable .active");
const reg = document.getElementById('reg').value;
    const dt = document.getElementById("dt").value;
    const idQuery = query(addCarRef, where("reg", "==", reg));
    const querySnapshot = await getDocs(idQuery);
    
      selected_td.forEach(sel => {
        for(var i=0;i<selected_td.length;i++){
          var d = table_data.rows[i].cells.item(0).innerHTML + ','; 
          console.log(d);
          const dataId = sel.dataset.id;
          const sel_id = sel.id;
          const sliced = sel_id.slice(0,3);
          const newSliced = sliced.replace(/_/g,"");
      
      querySnapshot.forEach((doc) => { 
        console.log(doc.id); 
        console.log(dataId); 
        console.log(newSliced); 
        
        const docRef = collection(db, "vehicles", doc.id, "results"); 
        addDoc(docRef,{
          reference : dataId,
          check : d,
          result : newSliced
          })      
      }) 
     }
    })
  })
}

const searchRegNo = document.querySelector('.searchNum');
if (searchRegNo) {
searchRegNo.addEventListener('click', () => {
  var selectReg = document.getElementById('regNum').value
  console.log(selectReg);
  window.location ="report.html?Reg=" + selectReg;
})
}

// These functions are exported and can be accessed from the a2blib module
// See search.html
export const getVehicle = async (id) => {
  const vehicleRef = doc(db, "vehicles", id);
  const vehicleDoc = await getDoc(vehicleRef);

  return vehicleDoc.data();
}

export const getVehicleResults = async (id) => {
  const resultsRef = collection(db, "vehicles", id, "results");
  const resultsDocs = await getDocs(resultsRef);
  return resultsDocs.docs;
}
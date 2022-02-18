// Await function works only inside the async function  
//let value = await promise;  

async function myDisplay() {  
    let myPromise = new Promise(function(myResolve, myReject) {  
      myResolve("Hello World!!");  
    });  
    document.getElementById("main").innerHTML = await myPromise;  
  }  
  myDisplay();  


  async function myDisplay1() {  
    let myPromise1 = new Promise1(function(myResolve1, myReject1) {  
      setTimeout(function() { myResolve1("Hello World!!"); }, 2000);  
    });  
    document.getElementById("main").innerHTML = await myPromise1;  
  }  
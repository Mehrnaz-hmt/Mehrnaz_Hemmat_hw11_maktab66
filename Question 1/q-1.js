// let element = document.createElement("li");
//     element.classList.add("todo");
// console.log(element)
// const clearCompleted = document.querySelector(".clear-completed")


// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i <myNodelist.length-2; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); //Xs
  span.className = "close";
  span.style.fontSize = "xx-large";
  span.style.fontWeight = "lighter";
  span.style.color = "grey";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    listArray = []; //Me
    // alert("You must write something!"); //program
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  console.log(txt)
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//show pending items 
function showPendingItems () {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingItemsNumb = document.querySelector(".pending-items");

}
//===============================================
// let theme = document.querySelector(".moon"); //icon
// let body = document.querySelector("body");
// let ind = false;
// theme.addEventListener("click",function(){
//     if(ind == true){
//         // document.body.classList.remove("light");
//        body.style.background = "black"
//         ind = false;
//         theme.src ="./images/bg-desktop-dark.jpg";
        
//         header.style.background = "url(./images/icons/sun-3-16.png) no-repeat center center width:15px/ cover"
//     }
//     else{
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         ind = true;
//         theme.src ="./images/icon-moon.svg"
//         header.style.background = "url(./images/bg-desktop-light.jpg) no-repeat center center / cover"

//     }
// });
// var element = document.getElementById("myUL");
// var numberOfChildren = element.getElementsByTagName('li').length
// console.log(numberOfChildren)
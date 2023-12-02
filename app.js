let saveBtn = document.getElementById("savebtn");
saveBtn.style.display = "none";
let delAllBtn = document.getElementById("delbtn");
delAllBtn.style.display = "none";
let toDoBtn = document.getElementById("addtodo");
let toDoList = document.getElementById("todolist");


function addToDo()
{
let toDoInput=document.getElementById("todoinput");
let toDoInputValue = toDoInput.value;
let editedLi;


// console.log(toDoInputValue);



let createLi = document.createElement("li");
if (toDoInputValue.trim()) {
createLi.innerHTML=toDoInputValue;
toDoList.appendChild(createLi);
let editBtn = document.createElement("button");
editBtn.innerHTML="Edit";
let delBtn = document.createElement("button");
delBtn.innerHTML="Delete";
createLi.appendChild(editBtn);
createLi.appendChild(delBtn);

delBtn.addEventListener("click", function () {
    createLi.remove();
    if (toDoList.children.length === 0) {
      delAllBtn.style.display = "none";
    }
  });

editBtn.addEventListener("click",function(){
    let editText = createLi.childNodes[0].nodeValue;
    toDoInput.value = editText; 
    toDoBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    editedLi=createLi;
})
saveBtn.addEventListener("click",function(){
    saveBtn.style.display = "none";
      toDoBtn.style.display = "inline-block";
      editedLi.childNodes[0].nodeValue = toDoInput.value;
     toDoInput.value = "";
    //   console.log(toDoInput.value);
})
delAllBtn.style.display="inline-block";
console.log(createLi.childNodes);

}
else {
    alert("Please enter Todo");
}

}

function deleteAll() {
    if (toDoList.children.length > 0) {
      toDoList.innerHTML = null;
    }
    delAllBtn.style.display = "none";
  }
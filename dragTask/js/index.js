

let doneList = document.getElementById("doneTaskList");
let listItems = document.querySelectorAll(".task-list li");
let dropAreas = document.querySelectorAll(".drop-area");

listItems.forEach((elem, index) => {
    elem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("index", index)
    })
})

dropAreas.forEach(elem => {
    elem.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})

dropAreas.forEach(elem => {
    elem.addEventListener("drop", function (e) {
        let index = e.dataTransfer.getData("index");
        elem.querySelector("ul").appendChild(listItems[index])
    })
})

// let doneList = document.getElementById("doneTaskList");
// let todoList = document.getElementById("todoTaskList");
// let listItems = document.querySelectorAll(".task-list li");
// let dropAreas = document.querySelectorAll(".drop-area");

// listItems.forEach((elem, index) => {
//     elem.addEventListener("dragstart", function (e) {
//         e.dataTransfer.setData("index", index);
//     });
// });

// dropAreas.forEach(elem => {
//     elem.addEventListener("dragover", function (e) {
//         e.preventDefault();
//     });

//     elem.addEventListener("drop", function (e) {
//         let index = e.dataTransfer.getData("index");
//         elem.querySelector("ul").appendChild(listItems[index]);
//         listItems[index].style.textDecoration = "line-through";
//     });
// });

// todoList.addEventListener("dragover", function (e) {
//     e.preventDefault();
// });

// todoList.addEventListener("drop", function (e) {
//     let index = e.dataTransfer.getData("index");
//     todoList.appendChild(listItems[index]);
//     listItems[index].style.textDecoration = "none";
    //  listItems[index].style.removeProperty("text-decoration");
// });

// todoList.addEventListener("drop", function (e) {
//     let index = e.dataTransfer.getData("index");
//     let droppedItem = listItems[index];
//     todoList.appendChild(droppedItem);
//     droppedItem.style.removeProperty("text-decoration");
// });


let folderIcon = document.getElementById('folderIcon');
let fileInput = document.getElementById('fileInput');

folderIcon.addEventListener('click', function() {
    if (fileInput.style.display === 'block') {
        fileInput.style.display = 'none'; 
    } else {
        fileInput.style.display = 'block';
    }
});


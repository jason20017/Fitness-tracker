let section = document.querySelector("section");
let createItem = document.querySelector("#createItem");

createItem.addEventListener("click", (e) => {
  console.log(e.target.parentElement);
  e.preventDefault();

  let form = e.target.parentElement;
  let inputDate = form.children[0].value;

  let newItem = document.createElement("div");
  newItem.classList.add("newItem");

  //newItem_left
  let newItem_left = document.createElement("div");
  newItem_left.classList.add("newItem_left");

  let newDate = document.createElement("p");
  newDate.classList.add("newDate");
  newDate.innerText = inputDate;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";
  //delete Item
  deleteButton.addEventListener("click", () => {
    newItem.remove();
  });

  //newItem_right
  let newItem_right = document.createElement("div");
  newItem_right.classList.add("newItem_right");

  let input_List = document.createElement("div");
  input_List.classList.add("input_list");

  let input_term = document.createElement("input");
  input_term.classList.add("input_term");
  input_term.placeholder = "term";

  let input_weight = document.createElement("input");
  input_weight.classList.add("input_weight");
  input_weight.placeholder = "kg";
  input_weight.type = "number";

  let input_rep = document.createElement("input");
  input_rep.classList.add("input_rep");
  input_rep.placeholder = "rep";
  input_rep.type = "number";
  let input_set = document.createElement("input");
  input_set.classList.add("input_set");
  input_set.placeholder = "set";
  input_set.type = "number";
  let addRecord = document.createElement("button");
  addRecord.classList.add("addRecord");
  addRecord.innerText = "add";

  //click addRecord
  addRecord.addEventListener("click", (e) => {
    let div_input_List = e.target.parentElement;
    let term = div_input_List.children[0].value;
    let weight = div_input_List.children[1].value;
    let rep = div_input_List.children[2].value;
    let set = div_input_List.children[3].value;

    let show_list = document.createElement("p");
    show_list.classList.add("show_list");

    let show_term = document.createElement("p");
    show_term.classList.add("show_term");
    show_term.innerText = term;

    let show_weight = document.createElement("p");
    show_weight.classList.add("show_weight");
    show_weight.innerText = weight;

    let show_rep = document.createElement("p");
    show_rep.classList.add("show_rep");
    show_rep.innerText = rep;

    let show_set = document.createElement("p");
    show_set.classList.add("show_set");
    show_set.innerText = set;

    let deleteList = document.createElement("button");
    deleteList.classList.add("deleteList");
    deleteList.innerText = "Delete";
    //Delete fitness List
    deleteList.addEventListener("click", () => {
      show_list.remove();
    });

    show_list.appendChild(show_term);
    show_list.appendChild(show_weight);
    show_list.appendChild(show_rep);
    show_list.appendChild(show_set);
    show_list.appendChild(deleteList);
    newItem_right.appendChild(show_list);

    input_term.value = "";
    input_weight.value = "";
    input_rep.value = "";
    input_set.value = "";

    //在關掉網頁時，頁面會被重新整理，todolist會消失，要用localStorage來儲存
    //首先，先創建一個連結輸入資料的object

    let myTodo = {
      Date: inputDate,
      Term: term,
      Weight: weight,
      Rep: rep,
      Set: set,
    };

    //將要儲存的資料以 array of object來做
    let myList = localStorage.getItem("list");
    if (myList == null) {
      localStorage.setItem("list", JSON.stringify([myTodo]));
    } else {
      let myListArray = JSON.parse(myList);
      myListArray.push(myTodo);
      localStorage.setItem("list", JSON.stringify(myListArray));
    }
  });

  //appendChild
  newItem_left.appendChild(newDate);
  newItem_left.appendChild(deleteButton);

  input_List.appendChild(input_term);
  input_List.appendChild(input_weight);
  input_List.appendChild(input_rep);
  input_List.appendChild(input_set);
  input_List.appendChild(addRecord);

  newItem_right.appendChild(input_List);

  newItem.appendChild(newItem_left);
  newItem.appendChild(newItem_right);
  section.appendChild(newItem);
});

/**============當有新增todoList的項目，然後將網頁關掉再打開，要顯示儲存的項目=========== */

// let myItem = localStorage.getItem("list");
// if (myItem !== null) {
//   let myItemArray = JSON.parse(myItem);
//   myItemArray.forEach((item) => {
//     //將原本抓進去localstorage儲存的資料，拉出來後，要恢復成原本的html與css設定

//     let newItem = document.createElement("div");
//     newItem.classList.add("newItem");

//     //newItem_left
//     let newItem_left = document.createElement("div");
//     newItem_left.classList.add("newItem_left");

//     let newDate = document.createElement("p");
//     newDate.classList.add("newDate");
//     newDate.innerText = item.Date;

//     let deleteButton = document.createElement("button");
//     deleteButton.classList.add("deleteButton");
//     deleteButton.innerText = "delete";
//     //delete Item
//     deleteButton.addEventListener("click", () => {
//       newItem.remove();
//     });

//     //newItem_right
//     let newItem_right = document.createElement("div");
//     newItem_right.classList.add("newItem_right");

//     //List 叫出資料

//     let show_list = document.createElement("p");
//     show_list.classList.add("show_list");

//     let show_term = document.createElement("p");
//     show_term.classList.add("show_term");
//     show_term.innerText = item.Term;

//     let show_weight = document.createElement("p");
//     show_weight.classList.add("show_weight");
//     show_weight.innerText = item.Weight;

//     let show_rep = document.createElement("p");
//     show_rep.classList.add("show_rep");
//     show_rep.innerText = item.Rep;

//     let show_set = document.createElement("p");
//     show_set.classList.add("show_set");
//     show_set.innerText = item.Set;

//     let deleteList = document.createElement("button");
//     deleteList.classList.add("deleteList");
//     deleteList.innerText = "Delete";
//     deleteList.addEventListener("click", () => {
//       show_list.remove();
//     });

//     show_list.appendChild(show_term);
//     show_list.appendChild(show_weight);
//     show_list.appendChild(show_rep);
//     show_list.appendChild(show_set);
//     show_list.appendChild(deleteList);
//     newItem_right.appendChild(show_list);

//     //appendChild
//     newItem_left.appendChild(newDate);
//     newItem_left.appendChild(deleteButton);
//     newItem.appendChild(newItem_left);
//     newItem.appendChild(newItem_right);
//     section.appendChild(newItem);
//   });
// }

let box = document.querySelector(".box");

let data = [
  {
    id: 1,
    name: "The first task title",
    balig: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, excepturi? Quos voluptate odio quae facilis officia consequatur sint magni",
    completed: false,
  },
  {
    id: 2,
    name: "The last task title",
    balig: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, excepturi? Quos voluptate odio quae facilis officia consequatur sint magni",
    completed: false,
  },
  {
    id: 3,
    name: "The first task title",
    balig: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, excepturi? Quos voluptate odio quae facilis officia consequatur sint magni",
    completed: false,
  },
  {
    id: 4,
    name: "The first task title",
    balig: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, excepturi? Quos voluptate odio quae facilis officia consequatur sint magni",
    completed: false,
  },
];


let btnADD = document.querySelector(".btnADD");
let dialogADD = document.querySelector(".dialogADD")
let x = document.querySelector(".x")
let h2 = document.querySelector(".h2")
let xx = document.querySelector(".xx")
let leb = document.querySelector(".leb")
let inp = document.querySelector(".inp")
let leb1 = document.querySelector(".leb1");
let inp1 = document.querySelector(".inp1");
let btnn = document.querySelector(".btnn");
let btnSAVE = document.querySelector(".btnSAVE");
let btnCANCEL = document.querySelector(".btnCANCEL");
let dialogEdit = document.querySelector(".dialogEdit");
let inp55 = document.querySelector(".inp55");
let inp66 = document.querySelector(".inp66");
let btnnEdit = document.querySelector(".btnnEdit");
let closeEdit = document.querySelector(".closeEdit");




x.onclick = () => {
    dialogADD.close();
}
btnCANCEL.onclick = () => {
  dialogADD.close();
};
btnADD.onclick = () => {
    dialogADD.showModal();
};
function NEWuser() {
  let User = {
    id:data.length+1,
    name: inp.value,
    balig: inp1.value,
    completed: false,
  };
  data.push(User);
  console.log(1);
  get()
  dialogADD.close()
}

btnSAVE.onclick = NEWuser;


btnSAVE.onclick = () => {
  NEWuser()
  inp.value = ""
  inp1.value=""
};


btnCANCEL.onclick = () => {
  NEWuser();
  inp.value = "";
  inp1.value = "";
};


function DELATE(id) {
  data = data.filter((elem) => {
    return elem.id!=id
  })
  get()
}


let idx = 0;
function EDIT(e) {
  idx = e.id;
  dialogEdit.showModal();
  data.find((ele) => {
    if (e.id === ele.id) {
      inp55.value = e.name;
      inp66.value = e.balig;
    }
  });
}


btnnEdit.onclick = () => {
  data = data.map((item) => {
    if (item.id == idx) {
      item.name = inp55.value;
      item.balig = inp66.value;
    }
    return item;
  });
  get();
  dialogEdit.close();
};
closeEdit.onclick = () => {
  dialogEdit.close();
};


function completedUser(id) {
  data = data.map(e => {
    if (e.id == id) {
      e.completed = !e.completed
    }
    return e;
  })
  get()
}


function get() {
  box.innerHTML=""
    data.forEach((elem) => {
        let content = document.createElement("div")
        content.classList.add("content")
        let block1 = document.createElement("div")
        block1.classList.add("block1")
        let name = document.createElement("h1")
        name.classList.add("name")
      name.innerHTML = elem.name
      if (elem.completed == true) {
        name.classList.toggle("chaked")
      }
        let balig = document.createElement("h3")
        balig.classList.add("balig")
        balig.innerHTML=elem.balig
        let block2 = document.createElement("div")
        block2.classList.add("block2")
        let icons = document.createElement("div");
        icons.classList.add("icons")
        let Edit = document.createElement("img")
        Edit.classList.add("Edit");
        Edit.src = "/img/Edit.jpg";
        Edit.onclick = () => {
          EDIT(elem)
        }
        let delate = document.createElement("img");
        delate.classList.add("delate");
        delate.src = "./del.jpg";
        delate.onclick = () => {
        DELATE(elem.id)
      }
        let checkboxDiv = document.createElement("div")
        checkboxDiv.classList.add("checkbox")
      let chek = document.createElement("input")
      chek.type = "checkbox"
      chek.classList.add("chaked")
      chek.checked = elem.completed;
      chek.onclick = () => {
        completedUser(elem.id)
      }
      
      





    
      block2.append(icons, checkboxDiv)
      icons.append(Edit);
      icons.append(delate);
      checkboxDiv.appendChild(chek)
      content.append(block1, block2)
      block1.append(name, balig)
        
    
        box.appendChild(content)
        // console.log(box);
    });
}

get()
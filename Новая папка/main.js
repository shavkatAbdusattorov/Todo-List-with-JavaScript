let box = document.querySelector(".box");

let data = [
  {
    name: "shavkat",
    fulname: "abdusattorov",
    year: 17,
  },
  {
    name: "Samariddin",
    fulname: "Zuhurov",
    year: 17,
  },
  {
    name: "Safiulloh",
    fulname: "Muhammadi",
    year: 23,
  },
];

function get() {
  box.innerHTML = "";
  data.forEach((elem) => {
    let content = document.createElement("div");
      content.classList.add("content");
      let h11 = document.createElement("h1");
      h11.innerHTML = elem.name;
      let h21 = document.createElement("h1");
      h21.innerHTML = elem.fulname;
      let h122 = document.createElement("h3");
      h122.innerHTML = elem.year;

    content.append(h11, h21, h122);
    box.appendChild(content);
    // console.log(box);
  });
}

get();

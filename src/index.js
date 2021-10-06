let addButton = document.getElementsByClassName("add-book")[0];
addButton.addEventListener("click", () => bookCreation());

function changeStatus(e) {
  if (e.innerText === "Not Read") {
    e.innerText = "Read";
    e.style.color = "green";
  } else {
    e.innerText = "Not Read";
    e.style.color = "#DA0037";
  }
}

function bookCreation() {
  let data = document.getElementsByClassName("input-data");

  if (data[0].value !== "" && data[1].value !== "" && data[2].value !== "") {
    let bookDiv = document.createElement("div");
    bookDiv.className = "book";

    let name = document.createElement("p");
    name.innerHTML = data[0].value;

    let autor = document.createElement("p");
    autor.innerHTML = data[1].value;

    let pages = document.createElement("p");
    pages.innerHTML = data[2].value;

    let status = document.createElement("p");
    status.innerHTML = "Not Read";
    status.className = "readStatus";
    status.addEventListener("click", function (e) {
      changeStatus(e.target);
    });

    let remove = document.createElement("button");
    remove.innerHTML = "X";
    remove.className = "delete";
    remove.addEventListener("click", function () {
      this.parentElement.remove();
    });

    bookDiv.appendChild(name);
    bookDiv.appendChild(autor);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(status);
    bookDiv.appendChild(remove);

    document.getElementsByClassName("books-container")[0].appendChild(bookDiv);
  } else {
    alert("fill in all the fields");
  }
}

let showAside = document.getElementsByClassName("add")[0];

showAside.addEventListener("click", () => {
  document.getElementsByTagName("aside")[0].style.display = "flex";
});

let closeAside = document.getElementsByClassName("close-aside")[0];

closeAside.addEventListener("click", () => {
  document.getElementsByTagName("aside")[0].style.display = "none";
});

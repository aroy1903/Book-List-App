const submitButton = document.querySelector("#submitBook");
const checkbox = document.querySelector("#readBook");
const libraryContent = document.querySelector("#library");

//book array
const myLibrary = [];

// object constructor values
const bookAuthor = document.querySelector("#bookAuthor");
const bookTitle = document.querySelector("#bookTitle");
const bookPages = document.querySelector("#bookPages");
let read;
let index = 0;
let delNum = -1;
// add a book
submitButton.addEventListener("click", () => {
  if (checkbox.checked == true) {
    let book1 = new book(
      bookAuthor.value,
      bookTitle.value,
      bookPages.value,
      "Read"
    );
    createBook(book1);
    index += 1;
    return clearFunc();
  } else {
    const book2 = new book(
      bookAuthor.value,
      bookTitle.value,
      bookPages.value,
      "Not Read"
    );
    index += 1;
    createBook(book2);
    return clearFunc();
  }
});

function clearFunc() {
  checkbox.checked = false;
  bookAuthor.value = "";
  bookTitle.value = "";
  bookPages.value = "";
}
//book constructor
function book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function libraryBook(book) {
  myLibrary.push(book);
}

function createBook(book) {
  const newDiv = document.createElement("div");
  newDiv.className = "bookElements";
  libraryContent.appendChild(newDiv);
  const header = document.createElement("h1");
  header.className = "booksHeader";
  header.innerText = book.author;
  newDiv.appendChild(header);
  const titleHeader = document.createElement("h4");
  titleHeader.className = "titleHeaders";
  titleHeader.innerText = book.title;
  newDiv.appendChild(titleHeader);
  const pageNum = document.createElement("h4");
  pageNum.className = "pageNum";
  pageNum.innerText = `${book.pages} Pages`;
  newDiv.appendChild(pageNum);
  const readBooks = document.createElement("h4");
  readBooks.className = "readbooks";
  readBooks.innerText = book.read;
  newDiv.appendChild(readBooks);
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.setAttribute("id", `del-${index}`);
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    libraryContent.removeChild(newDiv);
  });
  newDiv.appendChild(deleteButton);
  if (book.read !== "Read") {
    const readtoggle = document.createElement("Button");
    readtoggle.className = "toggleRead";
    readtoggle.innerText = "Read";
    readtoggle.addEventListener("click", () => {
      readtoggle.style.display = "none";
      readBooks.innerText = "Read";
    });
    newDiv.appendChild(readtoggle);
  }
  myLibrary.push(book);
}

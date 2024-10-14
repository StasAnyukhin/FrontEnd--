const listBook = [];
if (localStorage.getItem("books")) {
    const bookArr = JSON.parse(localStorage.getItem("books"));
    bookArr.forEach((book) => listBook.push(book));
    displayListBook();
}
function deleteAll() {
    listBook.length = 0;
    localStorage.removeItem("books");

    const listBookContainer = document.getElementById("listBook");
    listBookContainer.innerHTML = "";
}

function addBook() {
    const nameInput = document.getElementById("nameBook");
    const nameBook = nameInput.value.trim();

    const authorInput = document.getElementById("author");
    const author = authorInput.value.trim();

    const yearInput = document.getElementById("year");
    const year = yearInput.value.trim();

    const genreInput = document.getElementById("genre");
    const genre = genreInput.value.trim();

    const statusInput = document.getElementById("status");
    const status = statusInput.value.trim();

    const book = {
        id: new Date().getTime(),
        name: nameBook,
        author: author,
        year: year,
        genre: genre,
        status: status,
    };

    listBook.push(book);
    displayListBook();
    localStorage.setItem("books", JSON.stringify(listBook));
}
function displayListBook() {
    const listBookContainer = document.getElementById("listBook");
    listBookContainer.innerHTML = "";
    listBook.forEach((book, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.name}, ${book.author}, ${book.year}, ${book.genre}, ${book.status}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.onclick = () => removeBook(index);
        listItem.appendChild(deleteButton);
        listBookContainer.appendChild(listItem);

        const editButton = document.createElement("button");
        editButton.textContent = "Редактирование";
        editButton.onclick = () => showModal(book);
        listItem.appendChild(editButton);
        listBookContainer.appendChild(listItem);
    });
}

function removeBook(index) {
    listBook.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(listBook));
    displayListBook();
}

const more = document.querySelector(".more");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const closeModal = () => {
    modal.style.display = "none";
    modal.classList.remove("modal-animation");
};

close.addEventListener("click", closeModal);

const modalContent = document.querySelector(".modal-body");
const modalFooter = document.querySelector(".modal-footer");


function showModal(book) {
    console.log(book);
    modal.style.display = "block";
    modal.classList.add("modal-animation");

    const inputName = document.createElement("input");
    const inputAuthor = document.createElement("input");
    const inputYear = document.createElement("input");
    const inputGenre = document.createElement("input");
    const inputStatus = document.createElement("input");
    const saveBtn = document.createElement("button");

    saveBtn.textContent = "Сохранить";
    saveBtn.onclick = () => saveBook(book);

    inputName.value = book.name;
    inputName.id = "modal-name";
    inputAuthor.value = book.author;
    inputAuthor.id = "modal-author";
    inputYear.value = book.year;
    inputYear.id = "modal-year";
    inputGenre.value = book.genre;
    inputGenre.id = "modal-genre";
    inputStatus.value = book.status;
    inputStatus.id = "modal-status";

    modalContent.innerHTML = " ";
    modalContent.appendChild(inputName);
    modalContent.appendChild(inputAuthor);
    modalContent.appendChild(inputYear);
    modalContent.appendChild(inputGenre);
    modalContent.appendChild(inputStatus);
    modalFooter.appendChild(saveBtn);
}
more.addEventListener("click", showModal);

const saveBook = (book) => {
    const name = document.getElementById("modal-name");
    const author = document.getElementById("modal-author");
    const year = document.getElementById("modal-year");
    const genre = document.getElementById("modal-genre");
    const status = document.getElementById("modal-status");

listBook.map((item) => {
    if (item.id === book.id) {
        item.name = name.value;
        item.author = author.value;
        item.year = year.value;
        item.genre = genre.value;
        item.status = status.value;
    }
});

    localStorage.setItem("books", JSON.stringify(listBook));
    displayListBook();
    closeModal();
};

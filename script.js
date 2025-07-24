const pageDiv = document.querySelector('.container');
const newBtn = document.querySelector('.new-btn');
const dialog = document.querySelector('#dialog');
const addBookBtn = document.getElementById('add-book');
const form = document.getElementById('all-inputs');

const myLibrary = [];

class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = crypto.randomUUID();
    }
}

function addBookToLibrary(...args) {
    const book = new Book(args[0], args[1], args[2], args[3]);
    myLibrary.push(book);
}

function displayBook() {
    myLibrary.map((book) => {
        if (myLibrary.indexOf(book) == myLibrary.length - 1) {
            let bookDiv = document.createElement('div');
            let bookTitle = document.createElement('h1');
            let bookPages = document.createElement('p');
            let bookAuthor = document.createElement('p');
            let removeBtn = document.createElement('button');
            
            bookDiv.classList.add('book-card');
            bookTitle.classList.add('book-title');
            bookPages.classList.add('book-pages');
            bookAuthor.classList.add('book-author');
            removeBtn.classList.add('remove-btn');

            bookDiv.setAttribute('data-id', book.id);

            removeBtn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
                myLibrary.splice(myLibrary.indexOf(book, 1));
            });

            removeBtn.innerText = 'Remove';
            bookTitle.innerText = book.title;
            bookPages.innerText = book.pages + ' pages';
            bookAuthor.innerText = book.author;

            bookDiv.append(bookTitle);
            bookDiv.append(bookPages);
            bookDiv.append(bookAuthor);
            bookDiv.append(removeBtn);

            pageDiv.append(bookDiv);
        }
    });
}

newBtn.addEventListener('click', () => {
    dialog.showModal();
});

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
    addBookToLibrary(title.value, author.value, pages.value);
    form.reset();
    displayBook();
});
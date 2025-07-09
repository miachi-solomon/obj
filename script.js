const pageDiv = document.querySelector('.container');
const newBtn = document.querySelector('.new-btn');
const dialog = document.querySelector('#dialog');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(...args) {
    const book = new Book(args[0], args[1], args[2], args[3]);
    myLibrary.push(book);
}

function displayBook() {
    myLibrary.map((book) => {
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

        removeBtn.innerText = 'Remove';
        bookTitle.innerText = book.title;
        bookPages.innerText = book.pages + ' pages';
        bookAuthor.innerText = book.author;

        bookDiv.append(bookTitle);
        bookDiv.append(bookPages);
        bookDiv.append(bookAuthor);
        bookDiv.append(removeBtn);

        pageDiv.append(bookDiv);
    });
}

newBtn.addEventListener('click', () => {
    dialog.showModal();
});
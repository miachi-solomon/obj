const pageDiv = document.querySelector('.container');

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
        const html = `
        ${book.title}
        ${book.author}
        ${book.pages}
        ${book.read}`;
        bookDiv.classList.add('book-card');
        bookDiv.append(html)
        pageDiv.append(bookDiv);
    });
}

addBookToLibrary('system design', 'miachi', 23, true);
addBookToLibrary('scalable system', 'solomon', 45, false);

displayBook()
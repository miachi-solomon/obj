const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (...args) {
    const book = new Book(args[0], args[1], args[2], args[3]);
    myLibrary.push(book);
}

addBookToLibrary('system', 'miachi', 45, false);
class Book {
  constructor(title, publicationYear, author) {
    this._title = title;
    this._publicationYear = publicationYear;
    this._author = author instanceof Author ? author : null;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (typeof title === "string" && title.trim() !== "") {
      this._title = title;
    } else {
      console.error("Invalid title. Must be a non-empty string.");
    }
  }

  get publicationYear() {
    return this._publicationYear;
  }

  set publicationYear(year) {
    if (typeof year === "number" && year > 0) {
      this._publicationYear = year;
    } else {
      console.error("Invalid publication year. Must be a positive number");
    }
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (author instanceof Author) {
      this._author = author;
    } else {
      console.error("Invalid author. Must be instance of Author class");
    }
  }

  publishBook() {
    if (this._author) {
      this._author.addBook(this); // in this case "this" refers to the book itself
    }
  }
}

class Author {
  constructor(name) {
    this._name = name;
    this._books = [];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string" && name.trim() !== "") {
      this._name = name;
    } else {
      console.error("Invalid name. Must be a non-empty string");
    }
  }

  get books() {
    return this._books.sort((a, b) => a.publicationYear - b.publicationYear);
  }

  addBook(book) {
    if (book instanceof Book) {
      this._books.push(book);
    } else {
      console.error("Invalid book. Must be instance of Book class");
    }
  }

  publishNewBook(title, publicationYear) {
    const newBook = new Book(title, publicationYear, this); // in this case, "this" refers to author
    this.addBook(newBook);
  }

  publishNewEbook(title, publicationYear, fileFormat) {
    const newEbook = new Ebook(title, publicationYear, this, fileFormat);
    this.addBook(newEbook);
  }
}

class Ebook extends Book {
  constructor(title, publicationYear, author, fileFormat) {
    super(title, publicationYear, author);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(format) {
    const validFormats = ["PDF", "EPUB", "DOCX"];
    if (validFormats.includes(format.toUppercase())) {
      this._fileFormat = format.toUppercase();
    } else {
      console.error(
        `Invalid format. Allowed formats: ${validFormats.join(",")}`
      );
    }
  }

  publishBook() {
    if (this._author) {
      this._author.addBook(this);
      console.log(`Ebook ${this.title} has been published digitally`);
    } else {
      console.error("Cannot publish ebook without an author");
    }
  }
}

const author1 = new Author("John Doe");
// console.log(author1);

// Publish books
author1.publishNewBook("The Coding Journey", 2025);
author1.publishNewBook("The Development Essentials", 2020);
author1.publishNewEbook("Javascript Guide", 2024, "pdf");

console.log(author1);

const book1 = new Book("Ana Karenina", 1970, new Author("Lav Tolstoj"));
console.log(book1);

const eBook1 = new Ebook("Angular Matery", 2021, author1, "EPUB");
eBook1.publishBook();
console.log(eBook1);
console.log(author1);

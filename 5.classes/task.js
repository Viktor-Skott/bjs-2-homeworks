class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = type;
        this.state = state;
    }

    fix() {
       let fixState = this._state * 1.5;
      if (fixState < 0) {
        return this._state = 0;
      } else if(fixState > 100) {
        return this._state = 100;
      }
       return this._state = fixState;
    }
    set state(numberOfState) {
      if(numberOfState < 0){
        this._state = 0;
      } else if(numberOfState > 100) {
        this._state = 100;
      } else {
        this._state = numberOfState;
      }
    }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
        super(name, releaseDate, pagesCount, state = 100, type = 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100, type = 'book') {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class SomeBook extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100, type = 'book'){
        super(name, releaseDate, pagesCount, state, type);
        this.author - author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type = 'novel') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type = 'fantastic') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}
class DetectiveBook  extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100, type = 'detective') {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class Library {
  constructor(name, books) {
      this.name = name;
      this.books = [];
  }

  addBook(book) {
      if (book.state > 30) {
          this.books.push(book);
      }
  }

  findBookBy(type, value) {
    let result = this.books.find((book) => book[type] === value);
    if (result === undefined) {
        return null;
    } else {
        return result;
    }
    }

  giveBookByName(bookName) {
      let result = this.books.find((book) => book.name === bookName);
      if (result !== undefined) {
          let deleteBook = this.books.indexOf(result);
          this.books.splice(deleteBook, 1);
          return result;
      } else {
          return null;
      }
  }
}
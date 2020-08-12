class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

    addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
    printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

///this is OUTSIDE THE BOOKSHELF CLASS

function loadBooks(bookshelf) {
  //inline function here
 // `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as the callback.
  //passed an array-> bookNames
  fakeAjax(BOOK_API,function getBooks(bookNames){
    for(let bookName of bookNames) {
    bookshelf.addFavoriteBook(bookName);
  }
  bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

var bookshelf = new Bookshelf();
loadBooks(bookshelf);
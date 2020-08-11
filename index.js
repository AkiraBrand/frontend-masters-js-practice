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
bookshelf.addFavoriteBook("The Shining");
bookshelf.printFavoriteBooks();
loadBooks(myBooks);
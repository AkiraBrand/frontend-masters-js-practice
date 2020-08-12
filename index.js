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
  //passed an array-> bookNames
  fakeAjax(BOOK_API,function onBooks(bookNames){
    //loop array 
    for (let bookName of bookNames) {
      //use the bookshelf object, call the addFavoriteBook method on it, pass it the bookName inside the bookNames array 
      bookshelf.addFavoriteBook(bookName);
    }
    // call the printfavebooks method on the bookshelf object
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
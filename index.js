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
	// and `printFavoriteBooks()`
}


var bookshelf = new Bookshelf();

bookshelf.addFavoriteBook("The Shining");
bookshelf.printFavoriteBooks();


//function printFavoriteBooks() {
// 	console.log(`Favorite Books: ${favoriteBooks.length}`);
// 	for (let bookName of favoriteBooks) {
// 		console.log(String(bookName));
// 	}
// }


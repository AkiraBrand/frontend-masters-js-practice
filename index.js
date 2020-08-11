function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(String(bookName));
	}
}

favoriteBooks = ["A Song of Ice and Fire", 1, null];

printFavoriteBooks();
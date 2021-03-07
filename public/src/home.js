// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.reduce((total, current) => (total += 1), 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((total, current) => (total += 1), 0);
}

function getBooksBorrowedCount(books) {
  return books.reduce(
    (total, current) => (total += !current.borrows[0].returned ? 1 : 0),
    0
  );
}

const sortAndReturn = function (arr) {
  arr.sort((a, b) => (a.count < b.count ? 1 : -1));
  return arr.length > 5 ? arr.slice(0, 5) : arr;
};

function getMostCommonGenres(books) {
  const found = [];
  const genres = [];
  for (let el of books) {
    if (!found.includes(el.genre)) {
      const bookObj = {};
      bookObj.name = el.genre;
      bookObj.count = 0;

      found.push(el.genre);
      genres.push(bookObj);
    }
  }

  for (let g of genres) {
    g.count = books.reduce(
      (total, current) => (total += current.genre === g.name ? 1 : 0),
      0
    );
  }

  return sortAndReturn(genres);
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    const bookObj = {};
    bookObj.name = book.title;
    bookObj.count = book.borrows.length;
    return bookObj;
  });

  return sortAndReturn(popularBooks);
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = books.map((book) => {
    const authorObj = {};
    authorObj.count = 0;
    for (let author of authors) {
      if (author.id === book.authorId)
        authorObj.name = `${author.name.first} ${author.name.last}`;
      authorObj.count = book.borrows.length;
    }
    return authorObj;
  });

  return sortAndReturn(popularAuthors);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

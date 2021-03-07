// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => {
    if (author.id === id) return author;
  });
}

function findBookById(books, id) {
  return books.find((book) => {
    if (book.id === id) return book;
  });
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => {
    if (!book.borrows[0].returned) return book;
  });
  const booksReturned = books.filter((book) => {
    if (book.borrows[0].returned) return book;
  });

  return [borrowed, booksReturned];
}

function getBorrowersForBook({ borrows }, accounts) {
  const accountBorrowers = accounts.filter((acc) => {
    for (let borrow of borrows) {
      if (acc.id === borrow.id) {
        acc.returned = borrow.returned;
        return acc;
      }
    }
  });

  return accountBorrowers.length > 10
    ? accountBorrowers.slice(0, 11)
    : accountBorrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

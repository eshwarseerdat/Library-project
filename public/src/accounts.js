// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((el) => el.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let total = 0;

  for (let book of books) {
    for (let borrow of book.borrows) {
      total += borrow.id === id ? 1 : 0;
    }
  }

  return total;
}

function getBooksPossessedByAccount({ id }, books, authors) {
  const checkedOut = books.filter((book) => {
    if (book.borrows[0].id === id && !book.borrows[0].returned) {
      for (let auth of authors) {
        if (auth.id === book.authorId) return (book.author = auth);
      }
    }
  });
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

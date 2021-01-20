const apiUrl = "http://localhost:3000";
const displayBooks = async () => {
  const data = await (await fetch(apiUrl + "/books")).json();
  data.books.forEach((book) => {
    displayBook(book);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});
// 1. Define the Book type
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Create an array to store books
let books: Book[] = [];

// 3. Implement a function to add new books
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// 4. Implement a function named listBooks to display all stored books
function listBooks(): void {
  console.log(`All Books:`);
  books.forEach((item) =>
    console.log(`- ${item.title} by ${item.author} (${item.publicationYear})`)
  );
}

// 5. Implement a function named searchBook to find books by title (should be an optional parameter)
function searchBook(searchTitle?: string): void {
  if (!searchTitle) {
    console.log(`Please provide a title to search.`);
  } else {
    let filtered = books.filter((item) => item.title.includes(searchTitle));

    if (filtered.length === 0) {
      console.log(`No books found with title containing "${searchTitle}".`);
    } else {
      console.log(`Search Results for "${searchTitle}":`);
      filtered.forEach((item) =>
        console.log(
          `- ${item.title} by ${item.author} (${item.publicationYear})`
        )
      );
    }
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };

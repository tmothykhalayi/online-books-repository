const bookContainer = document.getElementById('bookContainer') as HTMLElement;

fetch('/api/books')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((book: { title: string, author: string, price: number, image: string }) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      
      bookItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: $${book.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      `;
      
      bookContainer.appendChild(bookItem);
    });
  })
  .catch((error) => console.error('Error fetching books:', error));

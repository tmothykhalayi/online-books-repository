// client.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the books from the backend (this could be an API call)
    fetchBooks();
    
    // Event listener to add books to the cart
    const bookContainer = document.getElementById('bookContainer');
    const cart = [];
  
    // Fetch books from a fake API (replace with real API later)
    function fetchBooks() {
      // Dummy data for books (replace with a real API request later)
      const books = [
        { id: 1, title: 'Book 1', author: 'Author 1', price: 10 },
        { id: 2, title: 'Book 2', author: 'Author 2', price: 20 },
        { id: 3, title: 'Book 3', author: 'Author 3', price: 30 }
      ];
  
      // Render the books to the page
      displayBooks(books);
    }
  
    // Function to display books in the HTML
    function displayBooks(books) {
      if (!bookContainer) return;
  
      books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Price: $${book.price}</p>
          <button class="addToCart" data-id="${book.id}" data-title="${book.title}" data-price="${book.price}">Add to Cart</button>
        `;
        
        // Add the book to the book container
        bookContainer.appendChild(bookDiv);
      });
  
      // Add event listeners to "Add to Cart" buttons
      const addToCartButtons = document.querySelectorAll('.addToCart');
      addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const bookId = e.target.getAttribute('data-id');
          const bookTitle = e.target.getAttribute('data-title');
          const bookPrice = e.target.getAttribute('data-price');
          
          addToCart(bookId, bookTitle, bookPrice);
        });
      });
    }
  
    // Function to add a book to the cart
    function addToCart(id, title, price) {
      // Check if the book is already in the cart
      const existingBook = cart.find(book => book.id === id);
      
      if (existingBook) {
        existingBook.quantity += 1; // If it exists, increase the quantity
      } else {
        cart.push({ id, title, price, quantity: 1 }); // Otherwise, add the book to the cart
      }
  
      // Update the cart UI
      updateCartUI();
    }
  
    // Function to update the cart display
    function updateCartUI() {
      const cartContainer = document.getElementById('cartContainer');
      if (!cartContainer) return;
  
      // Clear the current cart display
      cartContainer.innerHTML = '';
  
      let total = 0;
      
      cart.forEach(book => {
        total += book.price * book.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');
        cartItem.innerHTML = `
          <p>${book.title} - $${book.price} x ${book.quantity}</p>
          <button class="removeFromCart" data-id="${book.id}">Remove</button>
        `;
        
        // Add the cart item to the cart container
        cartContainer.appendChild(cartItem);
      });
  
      // Display the total price
      const totalPrice = document.createElement('p');
      totalPrice.innerHTML = `Total: $${total}`;
      cartContainer.appendChild(totalPrice);
  
      // Add event listeners to remove buttons
      const removeButtons = document.querySelectorAll('.removeFromCart');
      removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const bookId = e.target.getAttribute('data-id');
          removeFromCart(bookId);
        });
      });
    }
  
    // Function to remove a book from the cart
    function removeFromCart(id) {
      const index = cart.findIndex(book => book.id === id);
      if (index !== -1) {
        cart.splice(index, 1); // Remove the book from the cart
      }
  
      // Update the cart UI after removing the item
      updateCartUI();
    }
  });
  
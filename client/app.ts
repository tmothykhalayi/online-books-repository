interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
}

// Function to display books on the homepage
const displayBooks = async (): Promise<void> => {
    try {
        const response = await fetch('http://localhost:5000/api/books');
        const books: Book[] = await response.json();
        const booksContainer = document.getElementById('books');

        books.forEach((book) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            bookCard.innerHTML = `
                <img src="${book.imageUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
                <p>$${book.price}</p>
                <button onclick="addToCart(${book.id})">Add to Cart</button>
            `;
            booksContainer?.appendChild(bookCard);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

// Function to add book to the cart
const addToCart = (bookId: number): void => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
};

// Initialize the app
window.onload = displayBooks;

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
}

// Function to display cart items
const displayCart = async (): Promise<void> => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const booksContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    try {
        // Fetch books details based on the book ids in the cart
        const responses = await Promise.all(cart.map((id: number) => fetch(`http://localhost:5000/api/books/${id}`)));
        const books: Book[] = await Promise.all(responses.map((res) => res.json()));

        let total = 0;

        books.forEach((book) => {
            total += book.price;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${book.imageUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
                <p>$${book.price}</p>
            `;
            booksContainer?.appendChild(cartItem);
        });

        cartTotal!.innerText = `Total: $${total.toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching cart books:', error);
    }
};

// Initialize cart page
window.onload = displayCart;

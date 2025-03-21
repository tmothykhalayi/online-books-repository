var bookContainer = document.getElementById('bookContainer');
fetch('/api/books')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (book) {
        var bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = "\n        <img src=\"".concat(book.image, "\" alt=\"").concat(book.title, "\">\n        <h3>").concat(book.title, "</h3>\n        <p>Author: ").concat(book.author, "</p>\n        <p>Price: $").concat(book.price, "</p>\n        <button class=\"add-to-cart\">Add to Cart</button>\n      ");
        bookContainer.appendChild(bookItem);
    });
})
    .catch(function (error) { return console.error('Error fetching books:', error); });

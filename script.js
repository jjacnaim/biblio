// Base de datos de libros
const booksDatabase = [

 {
        id: 1,
        title: "Maravillosamente imperfecto escandalosamente feliz",
        author: "Walter Riso",
        year: 2015,
        pdfUrl: "https://drive.google.com/file/d/13h74raeqJHVwmdQUpS01ZKQ0UhJqA6fW/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 2,
        title: "TERAPIA COGNITIVA DE LA DEPRESIÓN 19 edition",
        author: "AARON T. BECK - A. JOHN RUSH - BRIAN F. SHAW - GARY EMERY",
        year: 2010,
        pdfUrl: "https://drive.google.com/file/d/1SkAJ0KSMcJCLJY_F93Y31cfW-PtLW1ia/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 3,
        title: "Psicologia para principiantes",
        author: "Max Krone",
        year: 2020,
        pdfUrl: "https://drive.google.com/file/d/1wuOGOTDsw_uELtVpWXimpPuCFlnIRMVX/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 4,
        title: "Educar con amor y firmeza",
        author: "Silvana Tiani Brunelli",
        year: 1900,
        pdfUrl: "https://drive.google.com/file/d/1SjZAI5gACcSvDyEv5EnOcVrUDyE0ihPU/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 5,
        title: "Educar las emociones en la primera infancia",
        author: "Belen Piñeiro",
        year: 2015,
        pdfUrl: "https://drive.google.com/file/d/1ngJtfOPt0pvs0b8W-MEM1dNHgc_EmWPx/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 6,
        title: "Psicologia de la delincuencia",
        author: "Jesús López Latorre",
        year: 2006,
        pdfUrl: "https://drive.google.com/file/d/1uRWMNBzd-9EzkwS1lKWM9849LqUMJI3R/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 7,
        title: "Yo Julia",
        author: "Santiago Postegillo",
        year: 2018,
        pdfUrl: "https://drive.google.com/file/d/17xUr-OL_nucNNrDr9V8yXhlUsvlikuvS/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 8,
        title: "Veronica decide morir",
        author: "Paulo Coelho",
        year: 1998,
        pdfUrl: "https://drive.google.com/file/d/152cHhUDF8HMVy1TKPZAn7MOucY55th0e/view?usp=drive_link",
        cover: "book"
    },
     {
        id: 9,
        title: "Harry Potter y la camara secreta",
        author: "J. K. Rowling,",
        year: 1998,
        pdfUrl: "https://drive.google.com/file/d/13BuhWI8iIq8A5UC0m_bjsR8YU2vkMoAJ/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 10,
        title: "Harry Potter y el prisionero de azkaban",
        author: "J. K. Rowling,",
        year: 1999,
        pdfUrl: "https://drive.google.com/file/d/133W4mOV0qGIW8InP1FX6qYCJiy8phL1y/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 11,
        title: "Harry Potter y el misterio del principe",
        author: "J. K. Rowling,",
        year: 2005,
        pdfUrl: "https://drive.google.com/file/d/1RF-SfHAP5BKiJuaLLe4IsnmDAyc8VIxD/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 12,
        title: "Harry Potter y el caliz de fuego",
        author: "J. K. Rowling,",
        year: 2000,
        pdfUrl: "https://drive.google.com/file/d/1FCD03ofOSxPx5c0Q0rpj5n2LXz53t15H/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 13,
        title: "Harry Potter y las reliquias de la muerte",
        author: "J. K. Rowling,",
        year: 2007,
        pdfUrl: "https://drive.google.com/file/d/1xW7QuN354Sagwh-N8zCxj1yC0NbM2Sg5/view?usp=drive_link",
        cover: "book"
    },
    {
        id: 14,
        title: "Harry Potter y la orden del fenix",
        author: "J. K. Rowling,",
        year: 2003,
        pdfUrl: "https://drive.google.com/file/d/1YRJSHCyknRjsdnJVbFQb2MgjP09yMtaC/view?usp=drive_link",
        cover: "book"
    },
];

// Elementos del DOM
const booksContainer = document.getElementById('booksContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const loadingOverlay = document.getElementById('loadingOverlay');
const progressBar = document.querySelector('.progress');

// Función para obtener libros aleatorios
function getRandomBooks(books, count = 6) {
    // Copiar el array para no modificar el original
    const shuffled = [...books].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Mostrar libros en el grid
function displayBooks(books, isSearch = false) {
    booksContainer.innerHTML = '';
    
    // Si no es una búsqueda, mostrar solo 6 aleatorios
    const booksToShow = isSearch ? books : getRandomBooks(books);
    
    if (booksToShow.length === 0) {
        const message = document.createElement('div');
        message.className = 'search-message';
        message.textContent = 'No se encontraron libros que coincidan con tu búsqueda.';
        booksContainer.appendChild(message);
        return;
    }
    
    booksToShow.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-cover">
                <i class="fas fa-${book.cover}"></i>
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author} (${book.year})</div>
                <button class="book-btn" data-url="${book.pdfUrl}">
                    <i class="fas fa-eye"></i> Ver PDF
                </button>
            </div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
    
    // Agregar event listeners a los botones de Ver PDF
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-url');
            showLoadingAnimation(pdfUrl);
        });
    });
}

// Mostrar animación de carga y luego abrir PDF
function showLoadingAnimation(pdfUrl) {
    loadingOverlay.style.display = 'flex';
    progressBar.style.width = '0';
    void progressBar.offsetWidth;
    progressBar.style.width = '100%';
    
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        window.open(pdfUrl, '_blank');
    }, 6000);
}

// Función para buscar libros
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        // Si la búsqueda está vacía, mostrar 6 aleatorios nuevamente
        displayBooks(booksDatabase);
        return;
    }
    
    const filteredBooks = booksDatabase.filter(book => {
        return (
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    });
    
    // Al buscar, mostrar TODOS los resultados (no solo 6)
    displayBooks(filteredBooks, true);
}

// Event listeners
searchButton.addEventListener('click', searchBooks);
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchBooks();
    }
});

// Inicializar la página mostrando 6 libros aleatorios
displayBooks(booksDatabase);

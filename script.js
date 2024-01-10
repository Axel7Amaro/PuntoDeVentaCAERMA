document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos');
    const carritoLista = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const buscador = document.getElementById('search');
    
    // Supongamos que tienes un array de productos
    const productos = [
        { id: 1, nombre: "Arroz Dos Hermanos Largo Ancho", precio: 1800 },
        { id: 2, nombre: "Arroz Fabiola Largo Fino", precio: 1800 },
        { id: 3, nombre: "Arroz Fabiola Largo Ancho", precio: 3000 },
        { id: 4, nombre: "Arveja en caja", precio: 750 },
        { id: 5, nombre: "Atún", precio: 2000 },
        { id: 6, nombre: "Budin Valenciano", precio: 600 },
        { id: 7, nombre: "Caldo", precio: 200 },
        { id: 8, nombre: "Cepillo de dientes", precio: 750 },
        { id: 9, nombre: "CeluSal Caja", precio: 1500 },
        { id: 10, nombre: "CeluSal Pote", precio: 2250 },
        { id: 11, nombre: "Colgate", precio: 1200 },
        { id: 12, nombre: "Desodorante NIVEA", precio: 2600 },
        { id: 13, nombre: "Dulce de leche", precio: 1800 },
        { id: 14, nombre: "Duraznos en Mitades", precio: 2100 },
        { id: 15, nombre: "Fideos Spaghetti La Providencia", precio: 900 },
        { id: 16, nombre: "Fideos Tirabuzón La Providencia", precio: 900 },
        { id: 17, nombre: "Foco Candela", precio: 1800 },
        { id: 18, nombre: "Harina 0000 BLANCA FLOR", precio: 1000 },
        { id: 19, nombre: "Harina leudante MORIXE", precio: 1125 },
        { id: 20, nombre: "Harina para PIZZA", precio: 1950 },
        { id: 21, nombre: "Jabon Rexona x1", precio: 600 },
        { id: 22, nombre: "Jabon Tropez x1", precio: 500 },
        { id: 23, nombre: "Jabon Tropez x3", precio: 1300 },
        { id: 24, nombre: "Lentejas S&P", precio: 1275 },
        { id: 25, nombre: "Maiz Pizingallo", precio: 750 },
        { id: 26, nombre: "Mermelada BC", precio: 1650 },
        { id: 27, nombre: "Mermelada de zapallo", precio: 1125 },
        { id: 28, nombre: "Mermelada emeth", precio: 1200 },
        { id: 29, nombre: "Mortadela Argentina", precio: 3000 },
        { id: 30, nombre: "Mortadela Brasilera", precio: 2600 },
        { id: 31, nombre: "Pan Dulce Electo", precio: 600 },
        { id: 32, nombre: "Pan Dulce Valencianlo", precio: 1650 },
        { id: 33, nombre: "Pan x KG", precio: 1600 },
        { id: 34, nombre: "Papel Hihienico OKEY X4", precio: 1800 },
        { id: 35, nombre: "Ppel Higienico VUAL X1", precio: 500 },
        { id: 36, nombre: "Polenta Presto Pronto", precio: 1000 },
        { id: 37, nombre: "Sal 2 Anclas", precio: 900 },
        { id: 38, nombre: "Sal Entrefina Culminante", precio: 600 },
        { id: 39, nombre: "Sal Fina Culminante", precio: 825 },
        { id: 40, nombre: "Shampoo Sedal", precio: 900 },
        { id: 41, nombre: "Toallita Always", precio: 1300 },
        { id: 42, nombre: "Toallita LadySoft", precio: 700 },
        
    
    
        // ... más productos
    ];

    // Mostrar productos
    function mostrarProductos() {
        productosContainer.innerHTML = '';
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
                <label>Cantidad:</label>
                <input type="number" value="1" min="1" id="cantidad-${producto.id}">
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            `;
            productosContainer.appendChild(productoDiv);
        });
    }

    // Agregar producto al carrito
    window.agregarAlCarrito = function(id) {
        const cantidadInput = document.getElementById(`cantidad-${id}`);
        const cantidad = parseInt(cantidadInput.value);
        function agregarAlCarrito(productoId) {
    const productoExistente = carrito.find(item => item.id === productoId);

    if (productoExistente) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        const producto = productos.find(item => item.id === productoId);
        carrito.push({ ...producto, cantidad: 1 });
    }

    // Actualiza la interfaz del carrito
    actualizarCarrito();
}


        // Buscar el producto en el array
        const productoSeleccionado = productos.find(producto => producto.id === id);

        // Añadir al carrito
        const itemCarrito = {
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            total: productoSeleccionado.precio * cantidad,
        };

        // Verificar si el producto ya está en el carrito
        const carritoExistente = Array.from(carritoLista.children);
        const itemExistente = carritoExistente.find(item => item.dataset.id === id.toString());

        if (itemExistente) {
            // Actualizar la cantidad y el total si el producto ya está en el carrito
            const nuevaCantidad = parseInt(itemExistente.querySelector('.cantidad').textContent) + cantidad;
            itemExistente.querySelector('.cantidad').textContent = nuevaCantidad;
            itemExistente.querySelector('.total-item').textContent = `$${(productoSeleccionado.precio * nuevaCantidad).toFixed(2)}`;
        } else {
            // Agregar nuevo elemento al carrito
            const listItem = document.createElement('li');
            listItem.dataset.id = id;
            listItem.innerHTML = `
                ${productoSeleccionado.nombre} - $${productoSeleccionado.precio.toFixed(2)} x
                <span class="cantidad">${cantidad}</span> -
                Total: $<span class="total-item">${itemCarrito.total.toFixed(2)}</span>
            `;
            carritoLista.appendChild(listItem);
        }

        // Actualizar total general del carrito
        actualizarTotalCarrito();
    };

    // Actualizar total del carrito
    function actualizarTotalCarrito() {
        const itemsCarrito = Array.from(carritoLista.children);
        const total = itemsCarrito.reduce((acumulado, item) => {
            const totalItem = parseFloat(item.querySelector('.total-item').textContent.replace('$', ''));
            return acumulado + totalItem;
        }, 0);

        totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Filtrar productos por nombre
    buscador.addEventListener('input', () => {
        const terminoBusqueda = buscador.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));
        mostrarProductos(productosFiltrados);
    });

    // Mostrar productos al cargar la página
    mostrarProductos();
});

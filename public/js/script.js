const apiURL = 'http://localhost:3001/products';

// Cadastro de Produto
if (document.getElementById("productForm")) {
    document.getElementById("productForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let price = parseFloat(document.getElementById("price").value);
        
        const newProduct = { name, description, price };

        // POST para adicionar um novo produto
        fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto adicionado:', data);
            document.getElementById("productForm").reset();
            window.location.href = "lista.html";
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
    });
}

// Listagem de Produtos
if (document.getElementById("productList")) {
    function fetchProducts() {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.price - b.price);

                const productList = document.getElementById("productList");
                productList.innerHTML = "";
                
                data.forEach(product => {
                    let row = `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>R$ ${product.price.toFixed(2)}</td>
                        </tr>`;
                    productList.innerHTML += row;
                });
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }
    fetchProducts();
}
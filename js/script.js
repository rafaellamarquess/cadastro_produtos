let products = [];

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = parseFloat(document.getElementById("price").value);
    let available = document.getElementById("available").value;
    
    products.push({ name, description, price, available });
    products.sort((a, b) => a.price - b.price);
    
    document.getElementById("productForm").reset();
    showList();
});

function showForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("listContainer").style.display = "none";
}

function showList() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    products.forEach(product => {
        let row = `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.description}</td> 
                    <td>${product.price.toFixed(2)}</td>
                    
                </tr>`;
        productList.innerHTML += row;
    });
    
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("listContainer").style.display = "block";
}

showForm();
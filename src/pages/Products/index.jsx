import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([
        {
            name: "Laptop",
            description: "High-performance laptop with a fast processor.",
            price: 999.99,
        },
        {
            name: "Smartphone",
            description: "Latest smartphone with a high-resolution display.",
            price: 699.99,
        },
        {
            name: "Headphones",
            description: "Noise-canceling headphones for an immersive audio experience.",
            price: 149.99,
        },
        {
            name: "Tablet",
            description: "Sleek and portable tablet for productivity on the go.",
            price: 399.99,
        },
        {
            name: "Camera",
            description: "Professional-grade camera for stunning photos and videos.",
            price: 899.99,
        },
        {
            name: "Television",
            description: "4K Ultra HD TV with smart features for entertainment.",
            price: 799.99,
        },
        {
            name: "Refrigerator",
            description: "Energy-efficient refrigerator with ample storage space.",
            price: 1299.99,
        },
        {
            name: "Washing Machine",
            description: "Front-loading washing machine with multiple wash cycles.",
            price: 599.99,
        },
        {
            name: "Gaming Console",
            description: "Next-gen gaming console for immersive gaming experiences.",
            price: 499.99,
        },
        {
            name: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with high-quality sound.",
            price: 79.99,
        },
    ])
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
    });
    const addProduct = (event) => {
        event.preventDefault();

        if (!newProduct.name || !newProduct.description || !newProduct.price) {
            alert('Please fill in all fields.');
            return;
        }

        const productToAdd = {
            name: newProduct.name,
            description: newProduct.description,
            price: parseFloat(newProduct.price),
        };

        setProducts([...products, productToAdd]);

        setNewProduct({
            name: '',
            description: '',
            price: '',
        });
    };
    useEffect(() => {
        console.log('A new product has been added!', products);
    }, [products]);
    return (
        <div>
            <h1>Products</h1>
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, description: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={newProduct.price}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                    }
                />
                <button type="submit">Add Product</button>
            </form>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.description} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Products;
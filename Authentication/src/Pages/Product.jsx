const Product = () => {
    const productData = {
        name: "Sample Product",
        description: "This is a sample product description.",
        price: 29.99,
        imageUrl: "https://via.placeholder.com/150"
    };

    return (
        <div className="flex flex-col items-center">
            <h1>{productData.name}</h1>
            <img src={productData.imageUrl} alt={productData.name} />
            <p>{productData.description}</p>
            <p>Price: ${productData.price}</p>
        </div>
    );
};

export default Product;

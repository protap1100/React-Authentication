import LogoutButton from "./Logout";

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Store</h1>
                <p>Your one-stop shop for all your needs.</p>
            </header>
            <section>
                <h2>Featured Products</h2>
                <div className="grid grid-cols-3 gap-5 mt-10">
                    <div className="product">
                        <img src="https://via.placeholder.com/150" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>High-quality product for your daily needs.</p>
                        <p>Price: $19.99</p>
                    </div>
                    <div className="product">
                        <img src="https://via.placeholder.com/150" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>Reliable and affordable product for everyone.</p>
                        <p>Price: $29.99</p>
                    </div>
                    <div className="product">
                        <img src="https://via.placeholder.com/150" alt="Product 3" />
                        <h3>Product 3</h3>
                        <p>Top-notch product for your premium needs.</p>
                        <p>Price: $39.99</p>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <h2>About Us</h2>
                <p>We are dedicated to providing the best products and services to our customers. Our mission is to offer quality products at competitive prices.</p>
            </section>
            <LogoutButton></LogoutButton>
        </div>
    );
};

export default Home;

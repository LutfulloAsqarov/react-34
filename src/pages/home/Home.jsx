import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./home.scss";
import defaultImage from "../../assets/default.png";
import { Link } from "react-router-dom";

const Home = () => {
    const { data: products } = useGetProductsQuery({ limit: 200 });

    // console.log(products.data.products);

    let productsCards = products?.data?.products
        ?.map((product) => (
            <div className="products__card" key={product.id}>
                <div className="products__card__img">
                    <Link to={`/product/${product.id}`}>
                        <img
                            src={
                                product.urls[0] ? product.urls[0] : defaultImage
                            }
                            alt="image"
                        />
                    </Link>
                </div>
                <div className="products__card__info">
                    <h3>{product.title}</h3>
                    <p className="products__card__desc">
                        {product.description}
                    </p>
                    <p>{product.price} $</p>
                </div>
            </div>
        ))
        .reverse();

    return (
        <div className="products container">
            <div className="products__cards">{productsCards}</div>
        </div>
    );
};

export default Home;

import React from "react";
// import { useGetProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import "./singlePage.scss";
import { useGetProductQuery } from "../../context/api/productApi";

const SinglePage = () => {
    const { id } = useParams();
    const {
        data: product,
        isSuccess,
        isLoading,
        isError,
    } = useGetProductQuery(id);

    return (
        <div className="single-product container">
            {isSuccess && product && (
                <>
                    <div className="single-product__img">
                        <img
                            src={product?.data?.urls[0]}
                            alt={product?.data?.title}
                        />
                    </div>
                    <div className="single-product__info">
                        <h2 className="single-product__title">
                            {product?.data?.title}
                        </h2>
                        <h3 className="single-product__price">
                            {product?.data?.price}${" "}
                            {product?.data?.oldPrice && (
                                <span>{product?.data?.oldPrice}$</span>
                            )}
                        </h3>
                        <p className="single-product__description">
                            {product?.data?.description}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SinglePage;

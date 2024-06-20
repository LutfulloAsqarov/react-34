import React, { useState } from "react";
import { useGetValue } from "../../../hooks/useGetValue";
import LocalImages from "./LocalImages";
import "./createProduct.scss";
import { useCreateProductMutation } from "../../../context/api/productApi";

let initialState = {
    title: "",
    price: "",
    oldPrice: "",
    category: "",
    units: "",
    description: "",
    info: "",
    files: "",
};

const CreateProduct = () => {
    const { formData, handleChange } = useGetValue(initialState);
    const [files, setFiles] = useState("");
    const [createProduct, { data, isLoading }] = useCreateProductMutation();
    // console.log(files);

    const handleCreateProduct = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("title", formData.title);
        form.append("price", formData.price);
        form.append("oldPrice", formData.oldPrice);
        form.append("category", formData.category);
        form.append("units", formData.units);
        form.append("description", formData.description);
        form.append("info", JSON.stringify([formData.info]));

        Array.from(files).forEach((img) => {
            form.append("files", img, img.name);
        });

        createProduct(form);
    };
    return (
        <div className="create">
            <form
                action=""
                onSubmit={handleCreateProduct}
                className="create__form"
            >
                <input
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="title"
                />
                <input
                    value={formData.price}
                    onChange={handleChange}
                    type="number"
                    name="price"
                    placeholder="price"
                />
                <input
                    value={formData.oldPrice}
                    onChange={handleChange}
                    type="number"
                    name="oldPrice"
                    placeholder="old price"
                />
                <input
                    value={formData.category}
                    onChange={handleChange}
                    type="text"
                    name="category"
                    placeholder="category"
                />
                <input
                    value={formData.units}
                    onChange={handleChange}
                    type="text"
                    name="units"
                    placeholder="units"
                />
                <textarea
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="description"
                ></textarea>
                <textarea
                    value={formData.info}
                    onChange={handleChange}
                    name="info"
                    placeholder="info"
                ></textarea>
                <div>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => setFiles(e.target.files)}
                        accept="image/*"
                    />
                    <br />
                    <LocalImages files={files} />
                </div>
                <button disabled={isLoading}>submit</button>
            </form>
        </div>
    );
};

export default CreateProduct;

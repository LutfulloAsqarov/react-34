import React, { useEffect } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { useSingInMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const initialState = {
    UserName: "",
    password: "",
};

const Login = () => {
    const { formData, handleChange } = useGetValue(initialState);
    let navigate = useNavigate();

    const [singIn, { data, isError, isLoading, isSuccess, error }] =
        useSingInMutation();

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem("x-auth-token", data.data.token);
            navigate("/admin/createProduct");
            // console.log(data);
        }
        if (isError) {
            alert(error.data.message);
        }
    }, [isSuccess, isError]);

    const handleLogin = (e) => {
        e.preventDefault();
        singIn(formData);
    };

    return (
        <form onSubmit={handleLogin} className="login__form">
            <input
                type="text"
                placeholder="name"
                name="UserName"
                value={formData.UserName}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    );
};

export default Login;

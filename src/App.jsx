import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import SinglePage from "./components/single-page/SinglePage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<SinglePage />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin" element={<Admin />}>
                        <Route
                            path="createProduct"
                            element={<CreateProduct />}
                        />
                        <Route
                            path="manageProduct"
                            element={<ManageProduct />}
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);


            // Dashboard par redirect
            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Login Failed");

        }
    };

    return (
        <div>

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <button type="submit">
                    Login
                </button>

            </form>

           <p>
  Don't have an account?{" "}
  <Link to="/register">Register</Link>
</p> 

        </div>
    );
}

export default Login;
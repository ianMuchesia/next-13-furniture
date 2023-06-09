import { setIsAuthenticated } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

  const dispatch = useAppDispatch()

  const user = useAppSelector(state=>state.auth.user)

 
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password) {
      toast.warn("please fill all the inputs");
      return;
    }

    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true, timeout: 5000 }
      );
      console.log(data);
      if (data.success) {
        toast.success("Login successful!");

        const { name, userId, role } = data.user;

        dispatch(setIsAuthenticated({
          name, userId, role
        }))
        setLoginForm({
          email: "",
          password: "",
        });


        setTimeout(() => {}, 2000);
      }
    } catch (error: any) {
      console.log(error);
      if (error.code === "ECONNABORTED") {
        // handle timeout error
        toast.error("Request timed out. Please try again later.");
        return;
      }
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username@email.com"
            value={loginForm.email}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password"
          placeholder="password"
              name="password"
              id="password"
              value={loginForm.password}
              onChange={handleChange} />
        </div>
        <button  className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <Link href="signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;

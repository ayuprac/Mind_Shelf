import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
function Signup() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    useEffect(() => {
      if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
      }
    }, [theme]);
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
      const {
         register,
         handleSubmit,
         formState: { errors },
       } = useForm();
     const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://mindshelf-mlds.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
           navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div  className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-md shadow-md">
          <div className=" ">
            <form onSubmit={handleSubmit(onSubmit)}method="dialog" className="relative">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute  top-0 right-2"
              >
                ✕
              </Link>

           

            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                 {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              
              <br />
               {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
               {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
             
            </div>
             </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

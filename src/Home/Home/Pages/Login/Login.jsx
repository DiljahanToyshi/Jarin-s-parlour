import {  Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import { saveUser } from "../../Components/hooks/auth";
const Login = () => {
  const {
    user,
    loading,
    setLoading,
    signIn,
    signInWithGoogle,
    resetPassword,
  } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You logged in successfully!",

          showConfirmButton: false,
          timer: 1500,
        });
            // save user in db
   saveUser(result.user);
        navigate(from, {replace:true});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You logged in successfully!",

          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, {replace:true});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  //   handle forget password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        setLoading(false);
        Swal.fire("Please check your email for reset your password!");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  return (
    <div className="flex justify-center items-center mt-4 ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-rose-50 text-gray-900 min-h-screen">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="text-start">
              <label htmlFor="email" className="text-start block mb-2 text-sm">
                Email address
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-rose-300 focus:outline-rose-500 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-rose-300 focus:outline-rose-500 bg-gray-100 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            onClick={handleResetPassword}
            className="text-xs hover:underline hover:text-rose-500 text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-rose-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;

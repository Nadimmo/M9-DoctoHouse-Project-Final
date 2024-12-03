// import React, { useContext } from "react";
import "./style.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const img = "https://i.ibb.co.com/TM6W9vk/Frame.png";
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, ProfileUpdate, GoogleSignIn, GithubSignIn, TwitterSignIn } =
    useContext(AuthContext);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    register(email, password)
      .then((res) => {
        // console.log(res.user)
        ProfileUpdate(name);
        // send user info in database
        axiosPublic.post("/users", { name, email }).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Register Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
          from.reset();
          navigate(location.state || "/");

          // console.log(res.data)
        });
      })
      .catch((error) => {
        // console.log(error.message)
        alert(error.message);
      });

    // const submitValue = {name,email,password}
    // console.log(submitValue)
  };

  const handlerGoogle = () => {
    GoogleSignIn()
      .then(res => {
        // console.log(res.user.email)
        // send user info in database
        const email = res.user.email
        axiosPublic.post("/users", email).then((res) => {
          // console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${res.data?.displayName} Register Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }else{
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: ` Register Successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
          Navigate(location.state || "/");
        });
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handlerGithub = () => {
    GithubSignIn()
    .then(res => {
      // console.log(res.user.email)
      // send user info in database
      const email = res.user.email
      axiosPublic.post("/users", email).then((res) => {
        // console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${res.data?.displayName} Register Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` Register Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        Navigate(location.state || "/");
      });
      
    })
    .catch((err) => {
      alert(err.message);
    });
  };
  const handlerTwitter = () => {
    TwitterSignIn()
    .then(res => {
      // console.log(res.user.email)
      // send user info in database
      const email = res.user.email
      axiosPublic.post("/users", email).then((res) => {
        // console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${res.data?.displayName} Register Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: ` Register Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        Navigate(location.state || "/");
      });
      
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="my-5">
      <div className="hero background rounded-2xl min-h-screen p-6">
        <div className="hero-content rounded-xl bg-white flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} alt="" className="background rounded-xl" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlerSubmit} className="card-body">
              <h1 className="text-center text-2xl lg:text-5xl font-bold">
                Sign up now!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  autoComplete="username"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  autoComplete="current-password"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#F7A582]">
                  Create Account
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="grid grid-cols-3 hover:cursor-pointer text-4xl gap-x-10 mx-auto">
                <button onClick={handlerGoogle}>
                  <FaGoogle></FaGoogle>
                </button>
                <button onClick={handlerTwitter}>
                  <FaTwitter></FaTwitter>
                </button>
                <button onClick={handlerGithub}>
                  <FaGithub></FaGithub>
                </button>
              </div>
              <p className="text-sm py-2 font-bold">
                Already registered? Go to{" "}
                <Link to={"/login"}>
                  <span className="text-[#F7A582]">SIGN IN</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

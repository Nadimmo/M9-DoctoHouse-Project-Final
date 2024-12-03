import "../Register/style.css";
import { Link, useNavigate, useLocation } from "react-router-dom"; // useNavigate instead of Navigate
import img from "../../assets/Frame.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handlerLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          const redirectPath = location.state || "/";
          navigate(redirectPath); // Properly navigate after login
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="my-5">
      <div className="hero background rounded-2xl  min-h-screen p-6">
        <div className="hero-content rounded-xl bg-white flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={img} alt="" className="background rounded-xl" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlerLogin} className="card-body">
              <h1 className="text-center text-2xl lg:text-4xl font-bold">
                Login now!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  autoComplete="username"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  autoComplete="current-password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-[#F7A582]">
                  Sign in
                </button>
              </div>
              <p className="text-sm py-2 font-bold">
                Please register at first? Go to{" "}
                <Link to={"/register"}>
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

export default Login;

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import  Swal  from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    const formData = event.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const photoUrl = formData.photoUrl.value;
    const password = formData.password.value;

    const userData = { name, email, photoUrl, password };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User registered successfully:",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-2/4 mx-auto">
          <form className="card-body" onSubmit={handleForm}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Photo Url
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo Url"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Current Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                  name="password"
                  autoComplete="off"
                />
                <span
                  className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                  )}
                </span>
              </div>
            </div>
            <label className="label">
              <a
                href="#"
                className="block text-base font-medium text-[#07074D]"
              >
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-2"></div>
            </div>
          </form>
          <div className="text-center">
            Already Have An Account
            <Link className="font-bold ml-2 text-green-500" to="/login">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Provider/UserProvider";

const Login = () => {
  const { setLoggedInUser, loading, setLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data);
        navigate("/");
      } else {
        console.error("Login failed");
        setError("Please Try With Correct UserName and Email");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-2/4 mx-auto mt-10">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="off"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
              <h1 className="text-xl font-bold text-red-500">{error}</h1>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 w-full px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <div className="text-center">
            Want to Join Us?
            <Link className="font-bold ml-2 text-green-500" to="/register">
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

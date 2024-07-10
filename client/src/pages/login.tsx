import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/shipments");
  };

  return (
    <div className="w-full h-full flex">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[450px] my-auto h-[450px] gap-6 bg-white justify-center px-6"
      >
        <div>
          <h3 className="mb-10 text-4xl text-sky-700 w-full text-center font-bold">
            LOGIN
          </h3>
        </div>
        <label htmlFor="email" className="">
          Email
          <input
            type="email"
            placeholder="Enter your email here"
            className="h-14 w-full outline-none border border-sky-400 bg-transparent rounded-xl px-3 mt-1 "
          />
        </label>
        <label htmlFor="password" className="">
          Password
          <input
            type="password"
            placeholder="Enter your password here"
            className="h-14 w-full outline-none border border-sky-400 bg-transparent rounded-xl px-3 mt-1 "
          />
        </label>
        <button
          type="submit"
          className="border-white bg-sky-700 border text-white hover:text-sky-300"
        >
          See More
        </button>
      </form>
    </div>
  );
};

export default Login;

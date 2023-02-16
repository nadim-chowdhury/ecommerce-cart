import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center">
      <form className="form">
        <div className="text-xl flex flex-col m-4">
          <label htmlFor="name">Enter your Name</label>
          <input type="text" name="name" />
        </div>

        <div className="text-xl flex flex-col m-4">
          <label htmlFor="email">Enter your Email</label>
          <input type="email" name="email" />
        </div>
      </form>

      <div>
        <h3 className="font-bold">Or</h3>
      </div>

      <div className="auth  ">
        <button>
          <i class="fa-brands fa-google"></i>
        </button>
        <button>
          <i class="fa-brands fa-facebook-f"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";

const Footer = () => {
  return (
    <div className="footer p-2 mt-10 text-xl flex justify-between items-center">
      <p className="p-4">&copy; 2023 All Rights Reserved by Nadim Chowdhury</p>
      <div className="p-4">
        <a href="https://github.com/nadim-chowdhury">
          <i class="fa-brands fa-github"></i>
        </a>
        <a className="ml-2" href="https://www.linkedin.com/in/nadim-chowdhury">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

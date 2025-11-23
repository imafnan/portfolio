import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white flex gap-[10px] justify-center items-center">
      Copyright © 2024 Afnan Alam. All rights reserved. <Link to="https://afnanalam-admin.netlify.app/" className="text-[#21272b]">Admin</Link>
    </div>
  );
};

export default Footer;

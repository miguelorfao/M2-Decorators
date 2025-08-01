import React from "react";
import { useAppContext } from "./Context";
function Footer() {
  const { companyEmail, companyNumber } = useAppContext();
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#222",
          color: "#eee",

          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: 14,
            color: "#777",
          }}
        >
          &copy; 2025 M2 Decorators Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;

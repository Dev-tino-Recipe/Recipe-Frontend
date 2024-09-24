import React from "react";

function AuthButton({onClick, children, type = "button", textColor = "text-black", borderColor = "border-black"}) {
  return (
      <button
          type={type} onClick={onClick}
          className={`text-nowrap border-2 rounded-lg px-2 py-1 ${textColor} ${borderColor}`}>{children}
      </button>
  )
}

export default AuthButton;
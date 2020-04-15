import React from "react"
import Logo from "../../logo/logo.svg"

export default function AppLogo() {
  return (
    <div className="flex justify-center w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a
        className="text-white no-underline hover:text-white hover:no-underline"
        href="/"
      >
        <Logo style={{ height: "100px" }} />
      </a>
    </div>
  )
}

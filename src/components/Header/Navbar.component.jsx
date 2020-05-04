import React from "react"

import SEO from "../SEO/Helmet.component"

export default function Navbar({children}) {
  return (
    <>
      <SEO />
      <header><nav className="p-2 bg-gray-800">{children}</nav></header>
    </>
  )
}
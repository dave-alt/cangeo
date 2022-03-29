import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <>
         <div className="navContainer">
        <div className="logoContainer">
          <Link className="logoLink" href="/#heroSection">
            <img style={{ height: "30px" }} src="cangeo.svg" alt="cangeo" />
          </Link>
        </div>
        <nav className="navLinksContainer">
          <Link href="/#heroSection">Home </Link>
          <Link href="/about">About </Link>
          <Link href="/pricing">Pricing </Link>
          <Link href="/#contact">Contact </Link>
          
        </nav>
      </div>
    </>
  )
}

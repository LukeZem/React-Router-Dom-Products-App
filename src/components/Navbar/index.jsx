import React from 'react'
import { Link } from 'react-router-dom'

const Navbar
    = () => {
        return (
            <div>
                <nav>
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                    <Link to={"/about"}>
                        <button>About</button>
                    </Link>
                    <Link to={"/products"}>
                        <button>Products</button>
                    </Link>
                </nav>
            </div>
        )
    }

export default Navbar

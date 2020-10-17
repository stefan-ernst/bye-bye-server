import Logo from "../public/Logo.svg";
import React from "react";
import Link from "next/link";
export default function Navigation() {

    return (
        <>
            <style jsx>{`
           .Header {
                grid-area: Header;
                font-size: 0.9rem;
                padding: 0.5rem;
                padding-top: 1rem;
                background: linear-gradient( 154deg, rgb(1, 51, 115) 0%, rgb(20, 132, 188) 100%);
           }
           nav {
                font-size: 1rem;
                max-width: 65%;
                padding-top: 0.5rem;
                
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            nav ul {
                list-style: none;
                display: flex;
                padding-left: 0px;
            }
            nav li {
                padding: 0.5rem;
            }
            .Logo {
                min-width: 280px;
            }
           `}
            </style>
            <div className={'Header'}>
                <nav role="navigation" aria-label="Main">
                <Link href="/"><a><img src={Logo} className={'Logo'} /></a></Link>
                </nav>
            </div>
        </>
    )
}
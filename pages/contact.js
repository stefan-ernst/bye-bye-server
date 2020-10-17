import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Navigation from "../components/Navigation";
import React from "react";
import ExternalLink from "../components/ExternalLink";
import Features from "../components/Features";


export default function Home() {

    return (
        <>
            <Header />
            <style jsx>
                {`
                .Content {
                    color: #1D222D;
                    font-size: 1rem;
                    justify-content: center;
                    padding: 1rem 1rem 5rem 1rem;
                    margin:0;
                }
                main {
                    grid-area: Main;
                }
                .Container {
                margin: 1rem;
                display: block;
                width: auto;
                padding: 1rem 2rem 1.5rem 2rem;
                border: 1px solid lightgrey;
                border-radius: 5px;
                box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);
                }
                .Announcement {
                width: 500px;
                margin: auto;
                
            }
            .Flex {
                display: flex;
                justify-content: flex-start;
            }
            h1, h2, h3 {
                padding: 0;
                margin: 0;
                margin-bottom: 10px;
                font-weight: 300;
            }
            h2 {
                font-size: 1.2rem;
                font-weight: 400;
            }
            
                `}
            </style>
            <div className='grid-container'>
                <Navigation />

                <main>
                    <div className={'Content'}>
                        <br />
                        <h1>About us</h1>
                        <br />
                        Disclosure:<br />
                        Apart from our existing
                        relationship with Atlassian through the Marketplace Partner program,<br />
                        we are unaffiliated with any vendors or products mentioned on this page. <br />
                        We do not receive commissions or kick-backs.
                        <br />
                    <br />
                    Realigned Technologies Ltd<br />
                    Suurstoffi 16<br />
                    CH-6343 Rotkreuz<br />
                    <br />
                    Switzerland
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
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
                background-color: white;
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

                    <div className={'Announcement Container'}>
                        <h1>Announcement</h1>
                    Atlassian has given customers advanced notice that their Server offering will be retired.
                    You can read the detailed announcement timeline
                        <ExternalLink url="https://www.atlassian.com/migration/key-offering-changes?tab=server-dates#important-dates"> here</ExternalLink>.
                        <br />
                    </div>
                    <br />

                    <div>
                    <h1>Jira Alternatives</h1>

                        <div className={'Flex'}>

                            <div className={'Container'}>
                                <h2>Jira Cloud</h2>
                                <Features list={{
                                    link: "https://www.atlassian.com/software/jira",
                                    hosting: "Cloud",
                                    subscription: "Yes",
                                    license: "Proprietary",
                                    marketplace: "Yes"
                                }} />
                            </div>

                            <div className={'Container'}>
                                <h2>Taiga</h2>
                                <Features list={{
                                    link: "https://www.taiga.io/",
                                    hosting: "Cloud, On Premise (on request)",
                                    subscription: "Yes",
                                    license: "Proprietary",
                                    marketplace: "No"
                                }} />
                            </div>

                            <div className={'Container'}>
                                <h2>YouTrack</h2>
                                <Features list={{
                                    link: "https://www.jetbrains.com/youtrack/",
                                    hosting: "Cloud, On Premise",
                                    subscription: "Yes",
                                    license: "Proprietary",
                                    marketplace: "No"
                                }} />
                            </div>

                            <div className={'Container'}>
                                <h2>Phabricator</h2>
                                <Features list={{
                                    link: "https://www.phacility.com/phabricator/",
                                    hosting: "Cloud, On Premise",
                                    subscription: "Yes (On Premise free)",
                                    license: "Apache 2.0",
                                    marketplace: "No"
                                }} />
                            </div>
                        </div>


                        <br />
                        <br />
                        <h1>Confluence Alternatives</h1>

                        <div className={'Flex'}>

                            <div className={'Container'}>
                                <h2>Confluence Cloud</h2>

                                <Features list={{
                                    link: "https://www.atlassian.com/software/jira",
                                    hosting: "Cloud",
                                    subscription: "Yes",
                                    license: "Proprietary",
                                    marketplace: "Yes"
                                }} />
                            </div>

                            <div className={'Container'}>
                                <h2>WikiJS</h2>

                                <Features list={{
                                    link: "https://wiki.js.org/",
                                    hosting: "On Premise",
                                    subscription: "No (Free)",
                                    license: "AGPL-3.0",
                                    marketplace: "No"
                                }} />
                            </div>

                            <div className={'Container'}>
                                <h2>BookStack</h2>

                                <Features list={{
                                    link: "https://www.bookstackapp.com/",
                                    hosting: "On Premise",
                                    subscription: "No (Free)",
                                    license: "MIT",
                                    marketplace: "No"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
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
                padding: 4;
                margin: 0;
                margin-bottom: 10px;
                font-weight: 300;
            }
            h3 {
                font-size: 1.4rem;
                margin-top: 20px;
                font-weight: 400;
            }
            
                `}
            </style>
            <div className='grid-container'>
                <Navigation />

                <main>
                    <div className={'Content'}>
                        <br />
                        <h1>Privacy Policy for Realigned Technologies</h1>
                        At bye-bye-server.com, accessible from http://bye-bye-server.com, one of our main priorities is the privacy of our visitors as well as users of our products. This Privacy Policy document contains types of information that is collected and recorded by bye-bye-server.com and how we use it.
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at info@realigned.ch
                        <h3>General Data Protection Regulation (GDPR)</h3>
                        We are a Data Controller of your information.
                        Realigned Technologies legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
                        <ol>
                            <li>Realigned Technologies needs to perform a contract with you</li>
                            <li>You have given Realigned Technologies permission to do so</li>
                            <li>Processing your personal information is in Realigned Technologies legitimate interests</li>
                            <li>Realigned Technologies needs to comply with the law</li>
                            </ol>

                        Realigned Technologies will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

                        If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
                        In certain circumstances, you have the following data protection rights:
                        <ol>
                            <li>The right to access, update or to delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability</li>
                            <li>The right to withdraw consent</li>
                        </ol>

                        <h3>Log Files</h3>
                        realignedtechnologies.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
                        <h3>Third Party Privacy Policies</h3>
                        realignedtechnologies.com’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                        <h3>Children’s Information</h3>
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        realignedtechnologies.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                        <h3>Online Privacy Policy Only</h3>
                        Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in realignedtechnologies.com.

                        <h3>Consent</h3>
                        By using our website and / or products, you hereby consent to our Privacy Policy and agree to its terms.


                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
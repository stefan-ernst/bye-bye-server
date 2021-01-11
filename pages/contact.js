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
            color: #1d222d;
            font-size: 1rem;
            justify-content: center;
            padding: 1rem 1rem 5rem 1rem;
            margin: 0;
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
            box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08),
              0 1px 1px 0 rgba(0, 0, 0, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.08);
          }
          .Announcement {
            width: 500px;
            margin: auto;
          }
          .Flex {
            display: flex;
            justify-content: flex-start;
          }
          h1,
          h2,
          h3 {
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
      <div className="grid-container">
        <Navigation />

        <main>
          <div className={"Content"}>
            <br />
            <h1>Legal</h1>
            <br />
            Disclosure:
            <br />
            Apart from our existing relationship with Atlassian through the
            Marketplace Partner program,
            <br />
            we are unaffiliated with any vendors or products mentioned on this
            page. <br />
            <br />
            While we have made every attempt to ensure that the information
            contained in this site has been obtained from reliable sources,
            Realigned Technologies is not responsible for any errors or
            omissions, or for the results obtained from the use of this
            information. All information in this site is provided "as is", with
            no guarantee of completeness, accuracy, timeliness or of the results
            obtained from the use of this information, and without warranty of
            any kind, express or implied, including, but not limited to
            warranties of performance, merchantability and fitness for a
            particular purpose. In no event will Realigned Technologies, its
            related partnerships or corporations, or the partners, agents or
            employees thereof be liable to you or anyone else for any decision
            made or action taken in reliance on the information in this Site or
            for any consequential, special or similar damages, even if advised
            of the possibility of such damages.
            <br />
            <br />
            <h1>About us</h1>
            <br />
            Realigned Technologies Ltd
            <br />
            Suurstoffi 16
            <br />
            CH-6343 Rotkreuz
            <br />
            <br />
            Switzerland
            <br />
            <br />
            <a href="https://realigned.ch" rel="noopener">
              https://realigned.ch
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

import Styles from "./styles/global";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/emojione_waving-hand.png" />
        <title>Bye Bye Server - Alternatives to Atlassian products</title>
        <meta
          name="description"
          content="Looking for alternatives to Atlassian Server products? Check our listing of alternative products as well as migration strategies for your existing Atlassian stack."
        />
        <script
          async
          defer
          data-domain="bye-bye-server.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <Styles />
    </>
  );
}

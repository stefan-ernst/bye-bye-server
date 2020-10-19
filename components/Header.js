import Styles from "./styles/global";
import Head from "next/head";


export default function Header() {

    return (
        <>

            <Head>
                <link rel="shortcut icon" href="/emojione_waving-hand.png"/>
                <title>Bye Bye Server</title>
                <meta
                    name="description"
                    content="Looking for alternatives to Atlassian Server products? Do you want to move to Atlassian Cloud - or do you want to move off the Atlassian stack completely?
                    We want to help you with the migration by listing alternative products as well as highlighting migration strategies."/>
            </Head>

            <Styles/>

        </>
    )

}
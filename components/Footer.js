import Link from "next/link";

export default function Footer() {

    return (
        <>
            <style jsx>
                {`
                .Footer { 
                grid-area: Footer;
                font-size: 1rem;
                padding: 1rem;
                text-align: center;
                position: relative;
                border-top: 1px solid white;
                color: white;
                background-color: #013373;
            }
            a {
                color: white;
                text-decoration: none;
            }
            a:hover {
                color: rgb(10, 198, 255);
                text-decoration: none;
            }
            
            .Footer nav {
                display: inline-block;
            }
                `}
            </style>
        <footer className='Footer'>
            <nav aria-label="Footer">
                <ul className='menu'>
                    <li>
                        <Link href="/privacy">
                            <a>Privacy</a>
                        </Link></li>
                    <li>
                        <Link href="/contact">
                            <a>Imprint</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <br/>

            <br />

            &copy; 2020 Realigned Technologies Ltd<br/>

        </footer>
        </>
    )
}
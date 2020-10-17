export default function Styles() {

    return (<>
        <style jsx global>{`
            html {
              font-size: 100%;
            }
            body {
              margin: 0;
              font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              background-color: #f5f5f5;
              padding: 0;
              color: white;
            }
           
            .grid-container {
              min-height: 100vh;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              grid-template-rows: 110px 2.3fr 0.2fr;
              gap: 0px 0px;
              grid-template-areas: "Header Header Header Header Header" ". Main Main Main ." "Footer Footer Footer Footer Footer";
            }
            ul {
                list-style: none;
               
                padding-left: 0px;
            }
            li {
                padding: 0.2rem;
            }
            nav ul {
                display: flex;
            }
            nav li {
                padding: 0.5rem;
            }
            a {
                color: #013373;
                font-weight: 600;
                text-decoration: none;
                display: inline;
            }
             a:hover {
                color: rgb(10, 198, 255);
                text-decoration: none;
            }
            @media only screen and (max-width: 1000px){
            .grid-container {
                      display: grid;
                      grid-template-columns: 1fr;
                      grid-template-rows: 110px 1fr 150px;
                      gap: 0 0;
                      grid-template-areas: "Header" "Main" "Footer";
                    }
            }
            `}
        </style>
    </>);
}

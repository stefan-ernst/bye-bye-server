import Header from '../../components/Header'
import Footer from "../../components/Footer";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Navigation from "../../components/Navigation";
import React from "react";


export default function Post({frontMatter, markdownBody}) {

    return (
        <>
            <Header/>
            <style jsx>
                {`
                .Content {
                    color: #1D222D;
                    font-size: 1rem;
                    justify-content: center;
                    padding: 3rem;
                    margin:0;
                }
                main {
                    grid-area: Main;
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
                font-size: 2rem;
                font-weight: 300;
            }
            .center-cropped {
              width: 100%;
              height: 300px;
              background-image: url('${frontMatter.coverImage}');
              background-position: center center;
              background-repeat: no-repeat;
              margin-top: 2rem;
            }
            .text {
                font-size: 1.1rem;
            }
             @media only screen and (max-width: 1000px){
                  
                  .center-cropped {
                    display: none;
                  }
                  .unsplash {
                    display: none;
                  }
              }
                `}
            </style>
            <style jsx global>
                {`
                .text img {
                    width: 85%;
                    margin: 2rem;
                    border: 1px solid lightgrey;
                    border-radius: 5px;
                    box-shadow: 0 0 1px 0 rgba(0,0,0,0.08), 0 1px 1px 0 rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.08);

                }
                `}
            </style>
            <div className='grid-container'>
                <Navigation/>

                <main>
                    <div className={'Content'}>

                        <h2>{frontMatter.title}</h2>

                            <div className={'center-cropped'}></div>
                            <div style={{textAlign:'right'}} className={'unsplash'}><small>{frontMatter.copyright}</small></div>
                            <br />

                            <div className={'text'}>
                            <ReactMarkdown source={markdownBody}/>
                            </div>
                    </div>
                </main>

                <Footer/>
            </div>
        </>
    )
}

export async function getStaticProps({...ctx}) {

    const {slug} = ctx.params;

    const content = await import(`../../_posts/blog/${slug}.mdx`)
    const data = matter(content.default)

    return {
        props: {
            frontMatter: data.data,
            markdownBody: data.content
        }
    };
}


const getSlugs = (context) => {
    const keys = context.keys()

    const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

        return slug.replace('.', '')
    })
    return data
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        return getSlugs(context)
    })(require.context('../../_posts/blog', true, /\.mdx$/))

    const paths = blogSlugs.map((slug) => `/posts/${slug}`)

    return {
        paths, // An array of path names, and any params
        fallback: false, // so that 404s properly appear if something's not matching
    }
}
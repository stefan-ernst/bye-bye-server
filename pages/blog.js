import Header from "../components/Header";
import Footer from "../components/Footer";
import matter from "gray-matter";
import Navigation from "../components/Navigation";
import React from "react";
import BlogList from "../components/BlogList";

export default function Blog({posts}) {

    return (
        <>
            <Header />
            <style jsx>
                {`
                .Content {
                    color: #1D222D;
                    font-size: 1rem;
                    justify-content: center;
                    padding: 1rem;
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
                font-size: 1.6rem;
                font-weight: 300;
            }
           
            .blog {
                width: 50%;
                justify-content: flex-start;
            }
            .blog_content {
                flex-direction: column;
            }
             @media only screen and (max-width: 1000px){
                  
                  .Flex {
                    flex-direction: column;
                  }
              }
            
                `}
            </style>
            <div className='grid-container'>
                <Navigation />

                <main>
                    <div className={'Content'}>

                        <BlogList posts={posts} />
                    </div>
                </main>

                <Footer />
            </div>
        </>
);
}

export async function getStaticProps(context) {

    const posts = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value = values[index]
            const document = matter(value.default)
            return {
                slug: slug.replace('.',''),
                ...document.data
            }
        })
        return data
    })(require.context('../_posts/blog', true, /\.mdx$/))

    return {
        props: {
            posts
        },
    }
}
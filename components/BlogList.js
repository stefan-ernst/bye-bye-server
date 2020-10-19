import Link from "next/link";
import React from "react";

export default function BlogList({posts}) {
    return (
        <>
            <style jsx>
                {`
               
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
            .half {
               flex-grow: 1;
               flex-shrink: 1;
               flex-basis: 0%;
               padding: 1rem;
            }
            .half p {
                font-size: 1.2rem;
                font-weight: 300;
            }
             @media only screen and (max-width: 1000px){
                  
                  .Flex {
                    flex-direction: column;
                  }
              }
            
                `}
            </style>
        <div style={{flexDirection:'column',justifyContent:'center'}}>
            {!posts && <div>No posts!</div>}
            {posts &&
            posts.map((post, index) => {
                return (
                    <div className={'Flex'} key={index}>
                        <div className={'half image'}> <img src={post.coverImage} style={{width:'100%'}} /></div>
                        <div className={'half'}>
                            <h2><Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
                            <p>{post.excerpt}</p></div>
                    </div>

                )
            })}
        </div>
        </>
    )
}
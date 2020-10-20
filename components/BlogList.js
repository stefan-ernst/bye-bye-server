import Link from "next/link";
import React from "react";

export default function BlogList({posts}) {
    return (
        <>
            <style jsx>
                {`
               
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
            .text {
                flex-grow: 3;
            }
            .half p {
                font-size: 1.2rem;
                font-weight: 300;
            }
            .half .inner {
                max-width: 1200px;
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
            posts.sort((a,b) => new Date(b.date) - new Date(a.date)).map((post, index) => {
                return (
                    <div className={'Flex'} key={index}>
                        <div className={'half image'}> <img src={post.coverImage} style={{width:'100%',maxWidth:500}} /></div>
                        <div className={'half text'}>
                            <div className={'inner'}>
                            <h2><Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
                            <p>{post.excerpt}</p></div>
                        </div>
                    </div>

                )
            })}
        </div>
        </>
    )
}
import React, { useEffect, useRef } from "react";
import { blogInfo } from "../../data/blogInfo";
import styles from "./BlogStyle.module.scss";

function Blog() {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const blogCardsCtn = containerRef.current;
    const blogCards = blogCardsCtn.querySelectorAll(`article > div`);   
    let firstVisibleBlogCard = null;

    let minTop = Infinity; 
    
    blogCards.forEach((blogCard) => {
      const rect = blogCard.getBoundingClientRect();
      console.log('rect.top', rect.top);
      console.log('rect', rect);
      
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (rect.top < minTop) {
          minTop = rect.top;
          firstVisibleBlogCard = blogCard;
        }
      }
    });
    console.log('blogCards', blogCards);
    if (firstVisibleBlogCard) {
      console.log('firstVisibleBlogCard', firstVisibleBlogCard);
      blogCards.forEach((blogCard) => {
        blogCard.classList.remove('link');
      });
      firstVisibleBlogCard.classList.add('link');
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blogInfoComponents = blogInfo.map((data, index) => {
    return (
      <div className={styles.blogCard} id={`card_${index}`} key={index}>
        <p>{data.content}</p>
        <div>{data.date}</div>
      </div>
    );
  });

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <h1>BLOG</h1>
        <div className={styles.infoContainer} >
          <article className={styles.blogCardsCtn} ref={containerRef}>{blogInfoComponents}</article>
        </div>
      </div>
    </section>
  );
}

export default Blog;

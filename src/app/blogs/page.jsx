import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData(){
  const res = await fetch("http://localhost:3000/api/posts" , {
    cache:"no-store",
  })
  if(!res.ok){
    console.log("err")
  }
  return res.json()
}
const Blogs = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {
      data.map((item)=>(
        <Link href={`/blogs/${item._id}`} className={styles.container} key={item._id} >
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt="adsfg"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p styles={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))
      }
    </div>
  );
};

export default Blogs;

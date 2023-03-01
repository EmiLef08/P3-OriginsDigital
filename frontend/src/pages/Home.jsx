/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "../styles/swiperconfig.scss";
import styles from "../styles/Home.module.scss";

import javascriptNul from "../assets/thumbnails/javascript-nul.png";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryArr = [];
  console.error("category arr = ", categoryArr);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/video`)
      .then((res) => res.data)
      .then((data) => {
        console.error(data);
        setVideos(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["carousel-container"]}>
        <Swiper
          pagination
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          className={styles["main-carousel"]}
        >
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={javascriptNul}
              alt=""
              className={styles["main-carousel"]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {console.error("video ===", videos)}
      {videos.map((video) => {
        console.error(video.name);
        setCategories(video.name);
        console.error("categories ==", categories);
        if (!categoryArr.includes(video.name)) {
          categoryArr.push(video.name);
        }
        return (
          <div className={styles.category}>
            <NavLink to="/search" className={styles["category-name"]}>
              {video.name}
            </NavLink>
            <div className={styles.thumbnails}>
              <img src={javascriptNul} alt="" />
              <img src={javascriptNul} alt="" />
              <img src={javascriptNul} alt="" />
            </div>
          </div>
        );
      })}
      {/* <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Recent
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          HTML
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          React
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Javascript
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          CSS
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Node.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Next.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Typescript
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Express.js
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          PHP
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          Java
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          SQL
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div>
      <div className={styles.category}>
        <NavLink to="/search" className={styles["category-name"]}>
          NoSQL
        </NavLink>
        <div className={styles.thumbnails}>
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
          <img src={javascriptNul} alt="" />
        </div>
      </div> */}
    </div>
  );
}

"use client";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import Styles from "@/app/components/CardsListSection/CardsSlider.module.css";
import Link from "next/link";

export const CardsSlider = (props) => {
  useEffect(() => {
    const options = {
      breakpoints: {
        // Параметры слайдера для экранов мобильных гаджетов шириной < 450px
        loop: false, // Отключи бесконечное переключение слайдов
        spaceBetween: 10, // Установи расстояние между слайдами в 10px
        allowTouchMove: true, // Позволь пользователю перемещать слайды
        slidesPerView: 1, // Количество отображаемых слайдов за раз = 1
        // Отключи автовоспроизведение — модуль Autoplay
        autoplay: {
          enabled: false,
        },
        // Параметры слайдера для мониторов компьютеров
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          enabled: true,
          clickable: true,
        },
        450: {
          loop: true, // Установи бесконечное переключение слайдов
          spaceBetween: 20, // Установи расстояние между слайдами в 20px
          slidesPerView: "auto", // Количество отображаемых слайдов (в зависимости от ширины экрана)
          allowTouchMove: false, // Запрети пользователю перемещать слайды
          speed: 6500, // Установи скорость анимации в миллисекундах
          // Включи автовоспроизведение анимации — модуль Autoplay
          autoplay: {
            enabled: true,
            delay: 0,
          },
          // Отключи постраничную навигацию — модуль Pagination
          pagination: {
            enabled: false,
          },
        },
      },
      modules: [Autoplay, Pagination],
    };
    new Swiper(".swiper", options);
  }, []);


  return (
    <>
      <div className={`swiper ${Styles["slider"]}`}>
        <ul className={`swiper-wrapper ${Styles["slider-wrapper"]}`}>
          {props.data.map((item) => {
            return (
              <li className={`swiper-slide ${Styles["slide"]}`} key={item.id}>
                <Link href={`/games/${item.id}`}>
                  <Card {...item} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={`swiper-pagination ${Styles["pagination"]}`}></div>
      </div>
    </>
  );
};
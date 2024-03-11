'use client'
import { useEffect } from 'react';
import { getGamesByCategory } from '@/app/data/data-utils.js'
import { Banner } from '@/app/components/Banner/Banner.jsx';
import { CardsList } from "@/app/components/CardsList/CardsList.jsx";
import { Promo } from '@/app/components/Promo/Promo';


export default function Home() {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList id='popular' title='Популярные' data={popularGames} />
      <CardsList id='new' title='Новинки' data={newGames} />
      <Promo />
    </main >
  );
};

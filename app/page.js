'use client'
import { useEffect } from 'react';
import { Banner } from '@/app/components/Banner/Banner.jsx';
import { Promo } from '@/app/components/Promo/Promo';
import { CardsListSection } from './components/CardsListSection/CardsListSection';
import { useGetDataByCategory } from '@/app/api/api-hooks'
import { endpoints } from "@/app/api/config";


export default function Home() {

  const popularGame = useGetDataByCategory(
    endpoints.games,
    "popular"
  );
  const newGame = useGetDataByCategory(
    endpoints.games,
    "new"
  );

  return (
    <main className="main">
      <Banner />
      {popularGame && <CardsListSection id="popular" type="slider" title="Популярные" data={popularGame} />}
      {newGame && <CardsListSection id="new" type="slider" title="Новинки" data={newGame} />}
      <Promo />
    </main>
  );
};

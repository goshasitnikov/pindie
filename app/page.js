'use client'
import { Banner } from '@/app/components/Banner/Banner.jsx';
import { Promo } from '@/app/components/Promo/Promo';
import { CardsListSection } from './components/CardsListSection/CardsListSection';
import { useGetDataByCategory } from '@/app/api/api-hooks'
import { endpoints } from "@/app/api/config";
import { Preloader } from './components/Preloader/Preloader';


export default function Home() {

  const popularGames = useGetDataByCategory(
    endpoints.games,
    "popular"
  );
  const newGames = useGetDataByCategory(
    endpoints.games,
    "new"
  );

  return (
    <main className="main">
      <Banner />
      {
        (popularGames && newGames) ? (
          <>
            <CardsListSection id="popular" type="slider" title="Популярные" data={popularGames} />
            <CardsListSection id="new" type="slider" title="Новинки" data={newGames} />
          </>
        )
          : <Preloader />
        }
      <Promo />
    </main>
  );
};

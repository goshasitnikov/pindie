import { getGamesByCategory } from '@/app/data/data-utils.js'
import { Banner } from '@/app/components/Banner/Banner.jsx';
import { CardList } from "@/app/components/CardsList/CardList.jsx";
import { Promo } from '@/app/components/Promo/Promo';

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardList id='popular' title='Популярные' data={popularGames} />
      <CardList id='new' title='Новинки' data={newGames} />
      <Promo />
    </main >
  );
};

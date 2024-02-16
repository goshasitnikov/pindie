import {getGamesByCategory} from './data/data-utils.js'
import { Banner } from './components/Banner/Banner.jsx';
import { CardList } from "./components/CardsList/CardList.jsx";
import { NewCardsFragment } from "./components/CardsList/NewCardsFragment.jsx";
import { PopularCardsFragment } from "./components/CardsList/PopularCardsFragment.jsx"
import { Promo } from './components/Promo/Promo.jsx';

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardList id='popular' title='Популярные' data={popularGames} />
      <CardList id='new' title='Новинки' data={popularGames} />
      <Promo />
    </main >
  );
};

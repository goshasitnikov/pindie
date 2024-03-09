import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";
import {CardList} from "@/app/components/CardsList/CardList";


export default async function PixelGames() {

   const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'pixel'
    )

    return (
        <main className={'main-inner'}>
            <CardList id='pixel' title='Пиксельные' data={pixelGames} />
        </main>
    )
}
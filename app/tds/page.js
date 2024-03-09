import { CardList } from '@/app/components/CardsList/CardList'
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function TDS() {

   const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'TDS'
    )

    return (
        <main className={'main-inner'}>
            <CardList id='TDS' title='TDS' data={tdsGames} />
        </main>
    )
}
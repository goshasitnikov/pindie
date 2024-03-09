import { CardList } from '@/app/components/CardsList/CardList'
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Runner() {

       const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'runner'
    )

    return (
        <main className={'main-inner'}>
            <CardList id='runner' title='Ранеры' data={runnerGames} />
        </main>
    )
}
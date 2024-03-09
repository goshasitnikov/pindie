import { CardList } from '@/app/components/CardsList/CardList'
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Shooter() {

     const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'shooter'
    )

    return (
        <main className={'main-inner'}>
            <CardList id='shooter' title='Шутеры' data={shooterGames} />
        </main>
    )
}
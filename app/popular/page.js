import { getNormalizedGamesDataByCategory } from '@/app/api/api-utils'
import { endpoints } from '@/app/api/config'
import { CardList } from '@/app/components/CardsList/CardList'

export default async function Popular() {

    const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'popular'
    )

    return (
        <main className={'main-inner'}>
            <CardList id='popular' title='Популярные' data={popularGames} />
        </main>
    )
}
import { getNormalizedGamesDataByCategory } from '@/app/api/api-utils'
import { endpoints } from '@/app/api/config'
import { CardList } from '@/app/components/CardsList/CardList'

export default async function New() {

    const newGames = await getNormalizedGamesDataByCategory(
        endpoints.games,
        'new'
    )

    return (
        < main className="main-inner">
            <CardList id="new" title="Популярные" data={newGames} />
        </main>
    )
}
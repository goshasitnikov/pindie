import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function Popular() {

    const popularGames = getGamesByCategory('popular')

    return (
        <main className={'main-inner'}>
            <CardList id='popular' title='Популярные' data={popularGames} />
        </main>
    )
}
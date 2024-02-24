import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function New() {

    const newGames = getGamesByCategory('new')

    return (
        <main className={'main-inner'}>
            <CardList id='new' title='Новинки' data={newGames} />
        </main>
    )
}
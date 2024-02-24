import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function TDS() {

    const tdsGames = getGamesByCategory('TDS')

    return (
        <main className={'main-inner'}>
            <CardList id='TDS' title='TDS' data={tdsGames} />
        </main>
    )
}
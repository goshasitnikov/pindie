import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function Runner() {

    const runnerGames = getGamesByCategory('runner')

    return (
        <main className={'main-inner'}>
            <CardList id='runner' title='Ранеры' data={runnerGames} />
        </main>
    )
}
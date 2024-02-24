import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function Shooter() {

    const shooterGames = getGamesByCategory('shooter')

    return (
        <main className={'main-inner'}>
            <CardList id='shooter' title='Шутеры' data={shooterGames} />
        </main>
    )
}
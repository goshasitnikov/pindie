import { getGamesByCategory } from '@/app/data/data-utils'
import { CardList } from '@/app/components/CardsList/CardList'

export default function PixelGames() {

    const pixelGames = getGamesByCategory('pixel')

    return (
        <main className={'main-inner'}>
            <CardList id='pixel' title='Пиксельные' data={pixelGames} />
        </main>
    )
}
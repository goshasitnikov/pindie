'use client'
import { CardsList } from '@/app/components/CardsList/CardsList'
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {useGetDataByCategory} from "@/app/api/api-hooks";

export default  function Shooter() {

     const shooterGames = useGetDataByCategory(
        endpoints.games,
        'shooter'
    )

    return (
        <main className={'main-inner'}>
            { shooterGames ? (
            <CardsList id='shooter' title='Шутеры' data={shooterGames} />
                 ) : (
                <Preloader/>
            )}
        </main>
    )
}
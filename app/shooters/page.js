'use client'
import { CardsListSection } from '@/app/components/CardsListSection/CardsListSection'
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
            <CardsListSection id='shooter' title='Шутеры' data={shooterGames} />
                 ) : (
                <Preloader/>
            )}
        </main>
    )
}
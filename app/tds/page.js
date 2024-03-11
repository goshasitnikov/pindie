'use client'
import { CardsList } from '@/app/components/CardsList/CardsList'
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {useGetDataByCategory} from "@/app/api/api-hooks";

export default  function TDS() {

   const tdsGames = useGetDataByCategory(
        endpoints.games,
        'TDS'
    )

    return (
        <main className={'main-inner'}>
            { tdsGames ? (
            <CardsList id='TDS' title='TDS' data={tdsGames} />
                 ) : (
                <Preloader/>
            )}
        </main>
    )
}
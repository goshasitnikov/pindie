'use client'
import { CardsList } from '@/app/components/CardsList/CardsList'
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {useGetDataByCategory} from "@/app/api/api-hooks";

export default  function Runner() {

       const runnerGames = useGetDataByCategory(
        endpoints.games,
        'runner'
    )

    return (
        <main className={'main-inner'}>
            { runnerGames ? (
            <CardsList id='runner' title='Ранеры' data={runnerGames} />
                 ) : (
                <Preloader/>
            )}
        </main>
    )
}
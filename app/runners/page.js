'use client'
import { CardsListSection } from '@/app/components/CardsListSection/CardsListSection'
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/app/api/api-hooks";

export default function Runner() {

    const runnerGames = useGetDataByCategory(
        endpoints.games,
        'runner'
    )

    return (
        <main className={'main-inner'}>
            {runnerGames ? (
                <CardsListSection id='runner' title='Ранеры' data={runnerGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}
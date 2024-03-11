'use client';
import { getNormalizedGamesDataByCategory } from '@/app/api/api-utils'
import { endpoints } from '@/app/api/config'
import { CardsList } from '@/app/components/CardsList/CardsList'
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";


export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");

    return (
        <main className="main-inner">
            {newGames ? (
                <CardsList id="new" title="Новые" data={newGames}/>
            ) : (
                <Preloader/>
            )}
        </main>
    )
}
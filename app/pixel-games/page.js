'use client'
import {endpoints} from "@/app/api/config";
import {useGetDataByCategory} from "@/app/api/api-hooks";

import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";
import {Preloader} from "@/app/components/Preloader/Preloader";



export default function PixelGames() {

   const pixelGames = useGetDataByCategory(
        endpoints.games,
        'pixel'
    )

    return (
        <main className={'main-inner'}>
            { pixelGames ? (
            <CardsListSection id='pixel' title='Пиксельные' data={pixelGames} />
                 ) : (
                <Preloader/>
            )}
        </main>
    )
}
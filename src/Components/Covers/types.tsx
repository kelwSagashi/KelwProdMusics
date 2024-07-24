export type CardCoversType = {
    img: string;
    name: string;
    author: string;
    type: string;
    interpreter: string;
}

export const CardsPropsOfMUsics: CardCoversType[] = [
    {
        author: "Kelw",
        name: "Messed Up Again",
        interpreter: "Kelw",
        img: "/public/Musics/MessedUpAgain.png",
        type: 'Instrumental Cover'
    }, 
    {
        author: "Kelw",
        interpreter: "Kelw",
        name: "Curse",
        img: "/public/Musics/Curse.png",
        type: 'Cover'
    },
    {
        author: "Kelw",
        name: "Vuco Nelas",
        interpreter: "Kelw",
        img: "/public/Musics/VucoNelas.png",
        type: 'Cover'
    }
]
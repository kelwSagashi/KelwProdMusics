import { Link } from "react-router-dom"
import CardPlayer from "../CardPlayer/CardPlayer"
import { NavBarLink, NavBarUl } from "../NavBar/NavBarLink"
import { MusicCards } from "../Player/Musics"

function ReleaseSection() {
    return (
        <>
            <div className="h-auto flex flex-col items-center mt-6 md:mt-20">
                <div className="p-4 w-full flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl sm:text-4xl md:text4xl text-center tracking-wide">
                            Lançamentos
                        </h1>
                    </div>
                    <div className="h-full">
                        <button className="text-center">
                            <NavBarUl>
                                <NavBarLink className='px-3 py-2 rounded-md 
                            hover:transition-all hover:duration-200
                            hover:bg-gradient-to-r hover:from-yellow-500 
                            hover:to-fuchsia-700'
                                    href='/'>
                                    Mais Lançamentos
                                </NavBarLink>
                            </NavBarUl>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
                {MusicCards.map((value, i) => (
                    <Link key={i}  to={`/Music/${value.id}`}>
                    <CardPlayer 
                        artist={value.artist} 
                        title={value.title} 
                        thumbnail={value.thumbnail} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ReleaseSection
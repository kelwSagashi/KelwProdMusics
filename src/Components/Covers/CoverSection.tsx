import CardPlayer from "../CardPlayer/CardPlayer"
import { CardsPropsOfMUsics } from "../CardPlayer/types"
import { NavBarLink, NavBarUl } from "../NavBar/NavBarLink"

function CoverSection() {
    return (
        <>
            <div className="h-auto flex flex-col items-center mt-6 md:mt-20">
                <div className="p-4 w-full flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl sm:text-4xl md:text4xl text-center tracking-wide">
                            Covers e Instrumentals
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
                                    Mais Covers
                                </NavBarLink>
                            </NavBarUl>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
                {CardsPropsOfMUsics.map((value, i) => (
                    <CardPlayer key={i} 
                    author={value.author} 
                    name={value.name} 
                    img={value.img} />
                ))}
            </div>
        </>
    )
}

export default CoverSection
import { useState } from 'react'
import { NavBarLink, NavBarNav, NavBarUl } from './NavBarLink'
import { Menu, X } from 'lucide-react';
import Logo from '../../../public/Capa_kelw.png'

function NavBar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
    const toggle = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <NavBarNav className={`
            sticky top-0 left-0 w-full py-3 border-b border-neutral-700/80
            backdrop-blur-lg flex justify-between items-center p-6
        `}>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center 
                                max-md:flex-wrap max-md:flex-col
                                max-md:gap-4'>
                    <div className='flex items-center flex-shrink-0 max-md:w-full'>
                        <img src={Logo} alt="" className='h-10 w-10 mr-2'/>
                        <span className='text-xl tracking-tighter font-thin'>
                            <span className='font-semibold'>KelwProd'</span>
                            Records</span>
                    </div>
                    <div className='fixed top-0 right-0 p-7 md:hidden sm:flex flex-col justify-end'>
                        <button onClick={toggle}>  
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                    <NavBarUl className={mobileDrawerOpen ? 'md:flex' : 'hidden md:flex'}>    
                        <NavBarLink href='/'>Inicio</NavBarLink>
                        <NavBarLink href='/Musicas'>Músicas</NavBarLink>
                        <NavBarLink href='/Contato'>Sobre Nós</NavBarLink>
                        <NavBarLink className='px-3 py-2 border rounded-md 
                            bg-gradient-to-r from-orange-500 to-orange-800' href='/'>
                            Contato
                        </NavBarLink>
                    </NavBarUl>
                </div>
            </div>
        </NavBarNav>
    )
}

export default NavBar
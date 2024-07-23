import React from 'react'
import { cn } from '../../lib/cn'

const NavBarLink = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({className, ...props}, ref) => (
    <li className={cn(`
        p-2
        relative text-[18px] text-white font-medium ml-6
        before:content-['']
        before:absolute before:top-full before:left-0 before:w-0
        before:h-[2px] before:bg-white before:transition-all before:duration-200 
        hover:before:w-full
    `, 
    className)}>
    <a  {...props} className='' ref={ref}/>
    </li>
))

NavBarLink.displayName = 'NavBarLink'

const NavBarNav = React.forwardRef<
    HTMLAnchorElement,
    React.HtmlHTMLAttributes<HTMLAnchorElement>
>(({className, ...props}, ref) => (
    <nav className={cn('', 
    className)} {...props} ref={ref}/>
))

NavBarNav.displayName = 'NavBarNav'

const NavBarAnchorBtn = React.forwardRef<
    HTMLAnchorElement,
    React.HtmlHTMLAttributes<HTMLAnchorElement>
>(({className, ...props}, ref) => (
    <a className={cn(`
        px-3 py-2 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800
    `, 
    className)} {...props} ref={ref}/>
))

NavBarAnchorBtn.displayName = 'NavBarAnchorBtn'

const NavBarUl = React.forwardRef<
    HTMLUListElement,
    React.HtmlHTMLAttributes<HTMLUListElement>
>(({className, ...props}, ref) => (
    <ul className={cn(`
        flex max-md:flex-col items-center max-md:w-full
    `, 
    className)} {...props} ref={ref}/>
))

NavBarUl.displayName = 'NavBarUl'

export { NavBarLink, NavBarNav, NavBarUl, NavBarAnchorBtn }
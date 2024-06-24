import { NavLink } from "react-router-dom"
import "./NavBar.css";

const links = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "posts",
        url: "/posts",
    },
]
export default function(){
    return(<>
        <header className=" bg-neutral-200">
            <nav className="container mx-auto py-4">
                <ul className="flex items-center gap-x-5">
                    {links.map((link,index) => (
                        <NavLink to={link.url} key={`navLink-${index}`} className={"capitalize"}>{link.name}</NavLink>
                    ))}
                </ul>
            </nav>
        </header>
    </>)
}
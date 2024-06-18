import { Nav } from "react-bootstrap"

export const NavItemWithIcon=({to,icon,currentPath,children})=>{
    return(
        <Nav.Link to={to} className={currentPath==to?'activate':''}>
            <div className="flex flex-col items-center">
            <span>{icon}</span>
            {children}
            </div>

        </Nav.Link>
    )
}
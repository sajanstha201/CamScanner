import { Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
export const NavItemWithIcon=({to,icon,currentPath,children})=>{
    return(
        <Nav.Link as={Link} to={to} className={currentPath==to?'bg-red':''}>
            <div className="flex flex-col items-center">
            <span className="h-5">{icon}</span>
            {children}
            </div>
        </Nav.Link>
    )
}
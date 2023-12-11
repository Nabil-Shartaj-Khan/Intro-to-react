import { NavLink } from "react-router-dom";
const Navlink = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/list">List </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/form">Form </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/image">Image </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/todo">To do </NavLink>
                </li>
                <li>
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/count">Counter </NavLink>
                </li>
                <li>
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/api">API calling </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/contact">Contact now </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/about">About us</NavLink>
                </li>
                <li>
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/footer">Footer</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Navlink;
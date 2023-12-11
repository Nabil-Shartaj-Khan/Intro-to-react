import { NavLink } from "react-router-dom";
const Navlink = () => {
    return ( 
        <div>
            <h4>Navigate through pages here</h4>
            <ul className="d-flex" style={{ listStyle: 'none', padding: 0 }}>
                   
                <li className="p-3">    

                    <NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/list">List </NavLink>
                </li>
                <li className="p-3">
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/form">Form </NavLink>
                </li>
                <li className="p-3">
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/image">Image </NavLink>
                </li>
                <li className="p-3">
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/todo">To do </NavLink>
                </li>
                <li className="p-3">
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/count">Counter </NavLink>
                </li>
                <li className="p-3">
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/api">API calling </NavLink>
                </li>
                <li className="p-3">
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/contact">Contact now </NavLink>
                </li>
                <li className="p-3">
                    <NavLink className={(isActive)=>isActive?"active-item":"pending-item"} to="/about">About us</NavLink>
                </li>
                <li className="p-3">
                    <NavLink  className={(isActive)=>isActive?"active-item":"pending-item"}to="/footer">Footer</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Navlink;
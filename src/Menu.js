import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkDesign = {
    color: "orange",
    with: "150px",
    padding: "20px",
    backgroundColor: "rgba(37,82,85,0.9)",
    border: "1px solid #255255",
    borderRadius:5,
    marginLeft:"10px",
    textDecoration:"none",
    
}

const style1 = {
    marginTop:"25px",
    display: "flex",
    justifyContent:"center",
}

const Menu = () => {
    return (
        <>
            <div style={style1}>
                <NavLink style={navLinkDesign} exact to="/"> Home </NavLink>
                <NavLink style={navLinkDesign} exact to="/statewise"> Statewise </NavLink>
                <NavLink style={navLinkDesign} exact to="/casestimeseries"> CasesTimeSeries </NavLink>
                <NavLink style={navLinkDesign} exact to="/tested"> Tested </NavLink>
                <NavLink style={navLinkDesign} exact to="/travel_history"> Travel History </NavLink>
                <NavLink style={navLinkDesign} exact to="/other"> Other </NavLink>
            </div>

        </>
    );
}

export default Menu;
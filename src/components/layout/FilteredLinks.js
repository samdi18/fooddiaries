import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/styles.css'
import { connect } from 'react-redux'



const FilteredLinks =() =>{
    return(
        
          <ul className = "blog-filters">
                <li><NavLink to='/bloglist'>All</NavLink></li>
                <li><NavLink to='/'>Latest</NavLink></li>
                <li><NavLink to='/'>Most Popular</NavLink></li>
                <li><NavLink to='/'>Cuisine</NavLink></li>
            </ul>



    )
}



export default FilteredLinks
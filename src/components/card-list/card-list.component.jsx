import React from 'react'
import './card-list.styles.css'
import CardContainer from '../card-container.component.jsx/card-container.component'

const CardList = ({filteredMonsters}) => (
    <div className='card-list'>
        {filteredMonsters.map((monster, index) => {
            return (<CardContainer key={index} monster={monster}/>)
        })}
    </div>  
)

export default CardList
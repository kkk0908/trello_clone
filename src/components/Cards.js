import React, { Component } from 'react'
import Card from './Card';
export class Cards extends Component {

    render() {
        //console.log(this.props.cards)
        return (
            <div>
                {
                    this.props.cards?(this.props.cards.map((card)=>{
                        return <Card card={card}/>
                    })):""
                }
                
            </div>
        )
    }
}

export default Cards

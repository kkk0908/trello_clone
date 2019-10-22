import React, { Component } from 'react'
import Card from './Card';
export class Cards extends Component {
    
    render() {
        
        return (
            <div>
                {
                    this.props.cards?(this.props.cards.map((card)=>{
                        return <Card card={card} removeCard={this.props.removeCard}/>
                    })):""
                }
                <a href="#"><button className="btn btn-link btn-lg" onClick={this.props.addCard}>Add another card</button></a>
            </div>
        )
    }
}

export default Cards

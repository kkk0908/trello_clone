import React, { Component } from 'react'

export class Card extends Component {
    render() {
        //console.log(this.props.card)
        return (
            <div className="card mt-2 p-1" style={{minHeight:"100px"}}>
                <h6 className="card-header">{this.props.card.name}</h6>
            </div>
        )
    }
}

export default Card

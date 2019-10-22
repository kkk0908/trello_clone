import React, { Component } from 'react'

export class Card extends Component {
    render() {
        //console.log(this.props.card)
        return (
            <div className="card mt-2 p-1" style={{minHeight:"100px"}}>
                <div className="card-header d-flex justify-content-between">
                <h6>{this.props.card.name}</h6>
                <button className="btn btn-sm btn-danger" onClick={()=>this.props.removeCard(this.props.card.id)}>X</button>
                </div>
            </div>
        )
    }
}

export default Card

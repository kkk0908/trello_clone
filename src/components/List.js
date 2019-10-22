import React, { Component } from 'react'
import Cards from './Cards'
const axios=require('axios')


export class List extends Component {
    state={
        
        cards:this.props.list.cards
    }
    addCard=()=>{
        var name=prompt("Card name:")
        axios.post(`https://api.trello.com/1/cards?name=${name}&idList=${this.props.list.id}&keepFromSource=all&key=${this.props.keys}&token=${this.props.token}`)
        .then(res=>{
            console.log(res.data)
            var cards=[...this.state.cards,res.data]
            console.log(cards)
            this.setState({cards})
        
        
        })
    }

    removeCard=(id)=>{
        console.log(id)
        axios.delete(`https://api.trello.com/1/cards/${id}?key=${this.props.keys}&token=${this.props.token}`)
        .then(res=>
            {console.log(res)
            var cards=[...this.state.cards]
            console.log(cards)
            cards=cards.filter((card)=>{
                return card.id !==id
            })
            console.log(cards)
            this.setState({cards})
            
            })
    }
    render() {
            //  console.log(this.props.list.id)  
              console.log(this.state.cards)  
        return (
            <div className="card m-2" style={{minWidth:"16rem",backgroundColor:"lightgrey"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between card-header">

                <h6 >{this.props.list.name}</h6>
                <button className="btn btn-sm btn-danger" onClick={()=>this.props.removeList(this.props)} >X</button>
                </div>
               
                <Cards cards={this.state.cards} addCard={this.addCard} removeCard={this.removeCard}/>
                
                
                </div>
            </div>
        )
    }
}

export default List

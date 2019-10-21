import React, { Component } from 'react'
import Cards from './Cards'

export class List extends Component {
    render() {
        //console.log(this.props.list)
        return (
            <div className="card m-2" style={{minWidth:"16rem",backgroundColor:"lightgrey"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between card-header">

                <h6 >{this.props.list.name}</h6>
                <button className="btn btn-sm btn-danger">X</button>
                </div>
               
                <Cards cards={this.props.list.cards}/>
                
                
                </div>
            </div>
        )
    }
}

export default List

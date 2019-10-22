import React, { Component } from 'react'

const axios=require('axios')
export class Board extends Component {
    state={
        idBoard:this.props.idBoard,
        keys:this.props.keys,
        token:this.props.token,
        lists:[],
        name:'',
        result:{},
        shortUrl:''
    }
    componentDidMount(){
        axios.get(`https://api.trello.com/1/boards/${this.props.idBoard}?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=${this.state.keys}&token=${this.state.token}`)
        .then(res=>{
           // console.log(res)
            this.setState({result:res,lists:res.data.lists,name:res.data.name,shortUrl:res.data.shortUrl})
        }
            )
        .then(err=>console.error(err))
    }
    
    render() {
       // console.log(this.state.shortUrl)
        return (
            <div className="card m-3" style={{width:"11rem",backgroundColor:"blue",color:"white"}}>
              <a href={"/board/"+this.state.idBoard} style={{textDecoration:"none",color:"inherit"}}> 
            <div className="card-body">    
            <h5 className="card-title">{this.state.name}</h5> 
             </div>   
             </a> 
            
            </div>
        )
    }
}

export default Board

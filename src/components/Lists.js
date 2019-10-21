import React, { Component } from 'react'
import List from './List';
const axios=require('axios')
export class Lists extends Component {
    state = {
        lists: [],
        idBoard:this.props.match.params.id,
        key: "7a9abac84727db420e2e4d718512af14",
        token: "e9ac68a0086b1b409ad811e3631e891b80ee8aaa199d000b589e6d8ea3c7ebcb"
      };
    componentDidMount(){
      axios.get(`https://api.trello.com/1/boards/${this.state.idBoard}/lists?cards=all&card_fields=all&filter=open&fields=all&key=${this.state.key}&token=${this.state.token}`)
      .then((res)=>{
         // console.log(res.data)
          this.setState({lists:res.data})


    })
    }
    createList=()=>{
      var name1=prompt("List name")
       axios.post(`https://api.trello.com/1/lists?name=${name1}&idBoard=${this.state.idBoard}&key=${this.state.key}&token=${this.state.token}`)
       .then(res=>{
           console.log(res.data)
           console.log(this.state.lists)
           
           this.setState({lists:[...this.state.lists,res.data]},()=>{
               console.log(this.state.lists)
           })
        //    var lists=[...this.state.lists]
        //    lists.push(res.data)
        
        //    this.setState({lists:lists})

    })
    }
    
    render() {
        //console.log(this.state.lists);
        return (
            <div style={{display:"flex",minWidth:"100%", minHeight:"10px", overflowX:"auto", overflowY:"auto"}}>
                {/* <h1>{this.props.match.params.id}</h1> */}
                {
                    this.state.lists.map((list)=>{
                        return <List list={list}/>
                    })
                }
                <a href="#" style={{color:"inherit"}}>
                    <button className="btn btn-link btn-lg" onClick={this.createList}> + Add another list</button>
                </a>
                
            </div>
        )
    }
}

export default Lists

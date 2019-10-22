import React, { Component } from "react";
import Board from "./components/Board";
const axios = require("axios");
export class Boards extends Component {
  state = {
    idBoards: [],
    key: "7a9abac84727db420e2e4d718512af14",
    token: "e9ac68a0086b1b409ad811e3631e891b80ee8aaa199d000b589e6d8ea3c7ebcb"
  };
  componentDidMount() {
    axios
      .get(
        `https://api.trello.com/1/members/satishkumar257?boardBackgrounds=none&boardsInvited_fields=name%2Cclosed%2CidOrganization%2Cpinned&boardStars=false&cards=none&customBoardBackgrounds=none&customEmoji=none&customStickers=none&fields=all&organizations=none&organization_fields=all&organization_paid_account=false&organizationsInvited=none&organizationsInvited_fields=all&paid_account=false&savedSearches=false&tokens=none&key=${this.state.key}&token=${this.state.token}`
      )
      .then(res => this.setState({ idBoards: res.data.idBoards }));
  }
  createBoard = () => {
    var name = prompt("Board name");
    axios
      .post(
        `https://api.trello.com/1/boards/?name=${name}&defaultLabels=true&defaultLists=true&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key=${this.state.key}&token=${this.state.token}`
      )
      .then(res => {console.log(res) 
        var idBoards=[...this.state.idBoards]
        idBoards.push(res.data.id)
        this.setState({idBoards})
       // window.location.reload(false)
      });
  };

  deleteBoard = () => {
    var id = prompt("id to delete a board");
    axios
      .delete(
        `https://api.trello.com/1/boards/${id}?key=${this.state.key}&token=${this.state.token}`
      )
      .then(res => {console.log(res)
        var idBoards=[...this.state.idBoards]
        idBoards=idBoards.filter((idBoard)=>{
             return idBoard!==id
        })
        this.setState({idBoards})
      //window.location.reload(false)
      });
      ;
  };
  render() {
    // console.log(this.state.idBoards);
    //const id = this.state.idBoards[0];
    //console.log(typeof id);
    return (
      <div className="d-flex justify-content-start mt-3 ml-3 flex-wrap">
        {this.state.idBoards.map(idBoard => {
          return (
            <Board
              idBoard={idBoard}
              keys={this.state.key}
              token={this.state.token}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={this.createBoard}
        >
          <div
            className="card mr-3"
            style={{
              width: "12.6rem",
              backgroundColor: "white",
              color: "black"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Create new board</h5>
            </div>
          </div>
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={this.deleteBoard}
        >
          <div
            className="card mr-3"
            style={{
              width: "12.6rem",
              backgroundColor: "white",
              color: "black"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Delete a Board</h5>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default Boards;

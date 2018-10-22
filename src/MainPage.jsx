import React, { Component } from 'react';
import './App.css';
import "react-tabs/style/react-tabs.css"
import { Navbar, Nav, NavItem, Collapse, NavbarToggler,Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row  } from 'reactstrap';
import $ from "jquery";



class MainPage extends Component {
  
   onDragOver(e) {
    e.preventDefault();
   }
   onDragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
   }
   onDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    $(e).target.append($("#listItemm"));
}
 allowDrop(e) {
  e.preventDefault();
}

addCard(e , cardName){
  $(".cards").append($("<Col>").addClass("col-2").attr("id","card").append([
    $("<div>").addClass("cardTitle").append([
     $("<p>").append($("<b>").html($(".cardName").val())),
     $("<h5>").append($("<b>").html("..."))
    ]),
    $("<div>").addClass("addCard").append($("<a>").attr("href","#").html("+ Add another Card"))
  ]))

}

  render(){
    return(
      <div className="mainPage">
         <div className="header">
             <div className="leftNav">
                
                 <div className="home">
                   <i className="fas fa-home"></i>
                </div>
                <div className="board">
                    <i className="fab fa-trello"> Boards</i>
                </div>

                <div className="search">
                  <i className="fas fa-search"></i>
                </div>
             </div>
             
              <div className="logo">
                <i className="fab fa-trello"></i>
                <p>Trello</p>
             </div>
             
              <div className="rightNav">
              <div className="plus">
                <i className="fas fa-plus"></i>
              </div>
              <div className="circle">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="bell">
                <i className="fas fa-bell"></i>
              </div>
              <div className="user">
                <i className="fas fa-user-alt"></i>
              </div>
             </div>
         </div>

         <div className="content">
           <div className="contentHead">
             <div className="leftContentHead">
             <div className="boardName">
                <a href="#"><b>Board Name</b></a>
                <i class="far fa-star"></i>
             </div>
             <div>
                <a href="#" className="personal">Personal</a>
             </div>
             <div>
                <a href="#" className="personal"><i class="fas fa-lock"></i> Private</a>
             </div>
                
                <i className="users fas fa-user-circle"></i>
                <i className="fas fa-user-plus addUser"></i>

             </div>
             <div className="rightContentHead">
                <p><span><b>...</b></span> Show Menu</p>
             </div>
           </div>
            
            <div className="contentBody">
               
            <div className="cards">
            <Col className=" col-2" id="card">
            <div className="cardTitle">
                   <p><b>To Do</b></p>
                   <h5><b>...</b></h5>
                 </div>
                 <div className="listItem my-1" draggable onDragOver={(e)=>{this.onDragOver(e)}} onDragStart={
                   (e)=> this.onDragStart(e)
                 }>
                     <p>Design</p>
                 </div>
                 <div className="addCard">
                   <a href="#" ><i className="fas fa-plus"> Add another Card</i></a>
                 </div>
               </Col>

                <Col className=" col-2" id="card">
            <div className="cardTitle">
                   <p><b>To Do</b></p>
                   <h5><b>...</b></h5>
                 </div>
                 <div className="listItem my-1" draggable onDragOver={(e)=>{this.onDragOver(e)}} onDragStart={
                   (e)=> this.onDragStart(e)
                 }>
                     <p>Design</p>
                 </div>
                 <div className="addCard">
                   <a href="#" ><i className="fas fa-plus"> Add another Card</i></a>
                 </div>
               </Col>
              

               <Col className="addList col-2">
                 <div>
                   <p className="addListP" onClick={()=>{
                     $(".addListP").css("display","none")
                     $(".addCardDetail").css("display","block")                     
                   }}>
                    + Add another Card
                    </p>
                   <div className="addCardDetail">
                   <input type="text" placeholder="card Name" className="form-control cardName"/>
                   <button className="btn btn-success mx-2 my-1" onClick={(e=>{
                     this.addCard(e)
                   })}>Add</button>
                   <button className="btn btn-danger mx-2 my-1"
                   onClick={()=>{
                    $(".addListP").css("display","block")
                    $(".addCardDetail").css("display","none")                     
                  }}
                   >Cancel</button>
                   </div>
                 </div>
               </Col>
               
             </div>
              

               
            </div>
         </div>
      </div>
    )
  }
}

export default MainPage;

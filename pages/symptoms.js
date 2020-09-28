import Link from 'next/link'
import Partials from './main/Partials';
import Navbar from './navs/Navbar';
import React, { useState,Component } from 'react';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import axios from 'axios';
import Progress from "react-progress-2";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Symptoms extends Component{ 
        componentDidMount(){
            this.listSymptoms()
        }
    state = {
          reps:[]
    };
  listSymptoms (){
  
  axios({
      url:'https://covi19server.herokuapp.com/symptoms/list',
      method:'GET'
  }).then((response)=>{
    this.setState({
    reps:response.data
    })
   
  })

}

 getSymptomsList(){
  return this.state.reps
}
        render(){
            return(
                   
      
      <div className="main">
      <Partials />
      <Navbar  />
          <Progress.Component/>
            <ReactNotification />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="sympts_container">
                            <div className="row justify-content-between">
                                <h4>Symtoms List</h4>
                            </div>
                            <hr />
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Order</th>
                                    </tr>
                                </thead>
                                <tbody>
{ this.getSymptomsList().map((item,index)=>(

<tr>


    <th scope="row">
    {item._id}
    </th>
    <th>
    {item.name}
    </th>
    <th>
    {item.score}
    </th>

    <th>
    {item.description}
    </th>

    <th>
    {item.order}
    </th>


</tr>


))}
                                   
                                </tbody>
                                </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       
      </div>
    
            );
        }
}  



export default Symptoms
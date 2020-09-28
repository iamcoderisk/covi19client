import Link from 'next/link'
import React, { useState,Component } from 'react';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import axios from 'axios';
import Progress from "react-progress-2";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 	6.637636799999999, lng: 	3.3558156 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 	6.637636799999999, lng: 	3.3558156 }} />}
  </GoogleMap>
))

// const Results = () => (
  
// )
  
class FirstHome extends Component { 

  componentDidMount(){
    
    if(typeof window !=='undefined'){
      var header = document.getElementById("myDIV");
      var btns = header.getElementsByClassName("btn-1");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-1");
        current[0].className = current[0].className.replace(" active-1", "");
        this.className += " active-1";
        });
  }
    }
  }
 
   state = {
    from: "",
    to: ""
   };
   handleChange = (event)=>{
    const target =  event.target;
    const name = target.name;
    const value =  target.value;

    this.setState({
        [name]: value
    })

};
submit = (event) =>{
      Progress.show();
      event.preventDefault();
         const payload = {
              from: this.state.from,
              to: this.state.to
          };
          axios({
                method: 'POST',
                url: 'https://covi19server.herokuapp.com/patients/list',
                data:payload,
                headers:{
                  'Content-Type': 'Application/json'
                }
            }).then(res => {
                console.log(res.data)
  
            }).catch(function(error) {
              
            })
  
    }
       
      
     

    render(){

      return(
      
      
        <div className="main">
            <Progress.Component/>
              <ReactNotification />
          <div className="sidebar">
              <div className="connect">
                <h5>COVID-19 Online Assessment Tracker</h5>
              </div>
          <form onSubmit={this.submit}>
              <div className="side_nav">
                <div className="sorter">
                <p>Reported:</p>
                <div id="myDIV">
    <button class="btn-1">Today </button>
    <button class="btn-1 active-1">Last Two Weeks</button>
    <button class="btn-1">Last 30 Days</button>
    <button class="btn-1" onClick={this.onClick}>Custom Range</button>
     
        
  </div>
  
  <div className="date_holder">
        <div className="row">
          <div className="col-md-12">
          <div className="form-group">
            <input type="date" className="form-control col-md-12" name="from"  value={this.state.from} onChange={this.handleChange} />
          </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-12">
          <div className="form-group">
            <input type="date" className="form-control col-md-12"  name="to"  value={this.state.to} onChange={this.handleChange} />
          </div>
        
          </div>
        </div>
      </div>
      <p>Symtom(s):</p>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1">
    Extreme difficulty breathing, chest pain, difficulty waking up or disorientation
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
    Serious problems breathing
    </label>
  </div>
  
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
    Healthcare Worker
      </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
    Moderate Symptoms like fever, cough, sore throat or runny nose
      </label>
  </div>
  
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
    Close contact with Covid-19 patients
      </label>
  </div>
  
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
    Foreign Travel History
      </label>
  </div>
  
  
    <div className="row justify-content-left">
      <div className="col-md-12 text-left">
      <button type="submit" className="btn btn-danger col-md-12">Search </button>
      </div>
    </div>
    
  
  
    <br />
    <br />
    <br />
  
  
  
                </div>
              </div>
              </form>
    
          </div>
          
          <div className="main_box">
            <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-12">
  
                  <MyMapComponent 
                     isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCObOkQ6gpWnXFszHoGbuqTPQxALHhBTGY"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
                   />
                  </div>
              </div>
            </div>
          </div>
    
    
         
        </div>
      );
    }
  }  



export default FirstHome
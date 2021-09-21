import React, { Component, useState } from 'react';
import { TextInput, TouchableOpacity, Image, View, Text, StyleSheet, FlatList, Linking } from 'react-native';
import './index.css';
import eventdata from './event';
class App extends React.Component {
  
  render() {
    const [searchTerm,setSearchTerm] = useState(null);
    return( 
    <div>
      <h2>Event Finder</h2>
      <center><input type="text" placeholder="Search" id="txt-search"
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
      /></center>

      {eventdata.filter((val)=>{
        if(searchTerm === ""){
          return val
        }else if(val.event.toLowerCase().includes(searchTerm.toLowerCase)){
          return val
        }
        return <p><div class="cls-event">
          <b> Event :</b>{val.event}
          <br></br>
          <b> Place :</b>{val.place}
          <br></br>
          <h7>Visit Here</h7>
          </div></p>
          
      })}
      
    </div>
     ) ;
  }
}

export default App;



npx kill-port 8000
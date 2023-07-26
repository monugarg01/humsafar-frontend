import React, { useState } from "react";
import "./formforinsertion.css";
import { Card, CardContent, TextField } from "@mui/material";
import axios from "axios";
import uuid from 'react-uuid'

export default function FormForInsertion() {

  const handleSubmit = (event) => {
    const prediction_id = uuid()
console.log("13",prediction_id)
    event.preventDefault();
    const prediction_description = document.getElementById("PredictionDescription").value
    const prediction_image_link = document.getElementById("PredictionImageLink").value
    const match_name = document.getElementById("MatchName").value
    const league = document.getElementById("League").value
    const date  = document.getElementById("Date").value
    const time = document.getElementById("Time").value
    const Stadium = document.getElementById("StadiumName").value
    const match_report = document.getElementById("MatchReport").value
    const telegram_link = "https://t.me/+m0i4xltrEzQzZWI9"
    const Instagram_link = "https://instagram.com/humsafarbhai_since2014?igshid=MzNlNGNkZWQ4Mg=="
    const facebook_link = "https://www.facebook.com/HUMSAFARBHAII?mibextid=ZbWKwL"
    const Wicket_Keeper1 = document.getElementById("WicketKeeper").value
    const Batsman1 = document.getElementById("BatsMan").value
    const all_rounder_1 = document.getElementById("AllRounderDetails1").value
    const Baller1 = document.getElementById("Blower").value
    const Wicket_Keeper2 = document.getElementById("WicketKeeper1").value
    const Batsman2 = document.getElementById("BatsMan1").value
    const all_rounder_2 = document.getElementById("AllRounderDetails2").value
    const Baller2 = document.getElementById("Blower1").value
    const Team_1_playing = document.getElementById("Team1playing112").value
    const Team_2_playing = document.getElementById("Team2playing113").value
    // const PredictionDescription = document.getElementById("PredictionDescription").value
  const allData = {prediction_description,prediction_image_link,
    match_name,league,date,time,Stadium,match_report,telegram_link,
    Instagram_link,facebook_link,Wicket_Keeper1,Batsman1,all_rounder_1,
    Baller1,Wicket_Keeper2,Batsman2,all_rounder_2,Baller2,Team_1_playing,Team_2_playing,prediction_id}
if(prediction_description!==''&& prediction_image_link!== '' && match_name!==''&& league !=='',date!==''&&time!==''&&Stadium!==''
 && match_report!==''&& telegram_link!==''&&Instagram_link!=='' && facebook_link!=='' && Wicket_Keeper1!==''&& Batsman1!=''&&all_rounder_1!==''&& Baller1!==''
&& Wicket_Keeper2!=='' && Batsman2!==''&& all_rounder_2!==''&& Baller2!=='' && Team_1_playing!==''&& Team_2_playing!=='')
        {
            console.log("test")
            axios.post("http://localhost:4000/test1",{allData})
        .then(data => data.respponse)
        .catch(error => console.log(error))   
    
        }
        // axios.get("http://localhost:3000/test")
        // .then(data => setData(data.data))
        // .catch(error => console.log(error))      ;
        // }; 

  };

  return (
    <Card style={{display: "flex",justifyContent: "center"}}>
    <div class="card">
    <div class="card-header">
      <h1>Prediction Details</h1>
    </div>
  <div class="card-body">
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label>Prediction Description</label>
    <input type="text" class="form-control" id="PredictionDescription"  placeholder="PRT vs UCC Dream11 Prediction, Player Stats, Pitch Report & Team | ECS Czechia, 2023"/>
  </div>
  <div class="form-group">
    <label for="PredictionImageLink">Prediction Image Link</label>
    <input type="text" class="form-control" id="PredictionImageLink"  placeholder="Prediction Image Link"/>
  </div>
   <div class="form-group">
    <label for="Match Name">Match Name</label>
    <input type="text" class="form-control" id="MatchName"  placeholder="Match Name"/>
  </div>
    <div class="form-group">
    <label for="League">League</label>
    <input type="text" class="form-control" id="League"  placeholder="League"/>
  </div>
    <div class="form-group">
    <label for="Date">Match Date</label>
    <input type="text" class="form-control" id="Date"  placeholder="Match Date"/>
  </div>
  <div class="form-group">
    <label for="Time">Time</label>
    <input type="text" class="form-control" id='Time'  placeholder="Match Time"/>
  </div>
  <div class="form-group">
    <label for="StadiumName">Stadium Name</label>
    <input type="text" class="form-control" id='StadiumName'  placeholder="StadiumName"/>
  </div>

  <div class="form-group">
    <label for="MatchReport">Match Report</label>
    <textarea  class="form-control" id='MatchReport'  placeholder="Match Report"/>
  </div>
  {/* <div class="form-group">
    <label for="TelegramLink">Telegram Link</label>
    <input type="text" class="form-control" id='TelegramLink'  placeholder="TelegramLink"/>
  </div>
  <div class="form-group">
    <label for="InstagramLink">Instagram Link</label>
    <input type="text" class="form-control" id='InstagramLink' placeholder="Instagram Link"/>
  </div>
  <div class="form-group">
    <label for="FaceBookLink">FaceBook Link</label>
    <input type="text" class="form-control" id='FaceBookLink' placeholder="FaceBook     Link"/>
  </div> */}
  <div class="form-group">
    <label for="WicketKeeper">Wicket Keeper Team1</label>
    <input type="text" class="form-control" id='WicketKeeper'  placeholder="Robin Uthappa,T10: Not Played,T20: 291M – 7272 Runs – 28.18 AVG,R F: 15-5-88-29, 0,Regis Chakabva,T10: Not Played,T20: 103M – 1427 Runs – 16.21 AVG
R F: 0-5-15-0-8"/>
  </div>
  <div class="form-group">
    <label for="BatsMan">Bats Man Team1</label>
    <input type="text" class="form-control" id='BatsMan'  placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374   M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="AllRounderDetails1">All Rounder Team1</label>
    <input type="text" class="form-control" id='AllRounderDetails1'  placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="Blower">Blower Team1</label>
    <input type="text" class="form-control" id='Blower' placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="WicketKeeper">Wicket Keeper Team2</label>
    <input type="text" class="form-control" id='WicketKeeper1'  placeholder="Robin Uthappa,T10: Not Played,T20: 291M – 7272 Runs – 28.18 AVG,R F: 15-5-88-29, 0,Regis Chakabva,T10: Not Played,T20: 103M – 1427 Runs – 16.21 AVG
R F: 0-5-15-0-8"/>
  </div>
  <div class="form-group">
    <label for="BatsMan">Bats Man Team2</label>
    <input type="text" class="form-control" id='BatsMan1'  placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="AllRounderDetails1">All Rounder Team2</label>
    <input type="text" class="form-control" id='AllRounderDetails2'  placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="Blower1">Blower Team2</label>
    <input type="text" class="form-control" id='Blower1' placeholder="Evin Lewis,T10: 32M – 832 Runs – 33.28 AVG,T20: 209M – 5766 Runs – 30.50 AVG,R F: 41, 10, 24, 5, 0,Eoin Morgan,T10: 22M – 450 Runs
     – 32.14 AVG,T20: 374M – 7780 Runs – 26.0"/>
  </div>
  <div class="form-group">
    <label for="Team1playing11">Team 1 playing 11</label>
    <input type="text" class="form-control" id='Team1playing112' placeholder="Robin Uthappa, Evin Lewis, Eoin Morgan"/>
  </div>
  <div class="form-group">
    <label for="Team2playing11">Team 2 playing 11</label>
    <input type="text" class="form-control" id='Team2playing113' placeholder="Robin Uthappa, Evin Lewis, Eoin Morgan"/>
  </div>
  <div class="form-group" >
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </form>
  </div>
  </div>
  </Card>
  );
}

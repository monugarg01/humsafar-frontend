import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';
import "./total-prediction.css";
import telegram  from '../assets/TELEGRAM1.png'
import instagram  from '../assets/instagram png (1).png'
import facebook  from '../assets/facebook.png'
export default function TotalPrediction() {
    const location = useLocation();
console.log("",location.state.Batsman1.split(','))
let allData = location.state.Batsman1.split(',')
let allRounder1 = location.state.all_rounder_1.split(',')
let bowler = location.state.Baller1.split(',')
//let allRounder2 = location.state.all_rounder_2.split(',')
let League = location.state.prediction_description
let wicket_keeper_2 = location.state.Wicket_Keeper2
let allData1 = location.state.Batsman2.split(',')
let allRounder2 = location.state.all_rounder_2.split(',')
let bowler1 = location.state.Baller2.split(',')
let wicket_keeper_1 = location.state.Wicket_Keeper1

  return (
<Card>
  <CardContent>
    <div><h2 style={{display: "flex",justifyContent: "center"}}>{League.split(',')[0]}</h2></div>
    <div className='predictiontable'> 
    <table id="table2">
  <tr>
    <td><strong>Match</strong></td>
    <td><strong>{location.state.match_name}</strong></td>
  </tr>
  <tr>
    <td><strong>League</strong></td>
    <td><strong>{League.split('|')[1]}</strong></td>
  </tr>
  <tr>
    <td><strong>Date</strong></td>
    <td><strong>{location.state.date}</strong></td>
  </tr>
  <tr>
    <td><strong>Time</strong></td>
    <td><strong>{location.state.date}</strong></td>
  </tr>
  <tr>
    <td><strong>Stadim</strong></td>
    <td><strong>{location.state.Stadium}</strong></td>
  </tr>
</table>
</div>
<div className='para'>
    <p>
        {location.state.match_report}
    </p>
</div>
<div className='telegramlink'>
    <figure>
        <a rel="noopener" target="_blank" className="telegram_hyperlink" href="https://t.me/+m0i4xltrEzQzZWI9">
        <img src = {telegram} className='image'/></a>
        {/*<figcaption>*/}
        {/*    <strong>*/}
        {/*    <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>JOIN TELEGRAM LINK</a>*/}
        {/*    </strong>*/}
        {/*</figcaption>*/}
    </figure>
</div>
<hr/>
<h2 className='heading_playerstats'><strong>{League.split(/(Dream11 Prediction)/)[0]}Player Stats</strong></h2>

<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Wicket-Keeper-300x43.png'/>
</figure>
<div className='wicket_keeper_1'>
<p>
    {wicket_keeper_1.split(",")[0]}
</p>
<p>
    {wicket_keeper_1.split(",")[1]}
</p>
<p>
    {wicket_keeper_1.split(",")[2]}
</p>
</div>
<div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Batsman-300x43.png'/>
</figure>
</div>
<div className='wicket_keeper_2'>
{allData.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
    {/* {console.log(i % 2 !== 0)}
    {
                    i % 2 == 0
                      ? <br/>
                      : null
    } */}
 </div>
))}
<div className='instagramlink'>
    <figure>
                          <a rel="noopener" target="_blank" className="instagram_hyperlink" href="https://instagram.com/humsafarbhai_since2014?igshid=MzNlNGNkZWQ4Mg">
        <img src = {instagram} className='image'/></a>
        {/*<figcaption>*/}
        {/*    <strong>*/}
        {/*    <a rel="noopener"  target = "_blank" className ="instagram_hyperlink" href={location.state.Instagram_link}>JOIN INSTAGRAM LINK</a>*/}
        {/*    </strong>*/}
        {/*</figcaption>*/}
    </figure>
</div>
<hr/>
</div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/All-Rounder-2-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{allRounder1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
    {/* {console.log(i % 2 !== 0)}
    {
                    i % 2 == 0
                      ? <br/>
                      : null
    } */}
 </div>
))}
</div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Bowler-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{bowler.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
    {/* {console.log(i % 2 !== 0)}
    {
                    i % 2 == 0
                      ? <br/>
                      : null
    } */}
 </div>
))}
</div>
<div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Batsman-300x43.png'/>
</figure>
</div>
<div className='wicket_keeper_2'>
{allData1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
    {/* {console.log(i % 2 !== 0)}
    {
                    i % 2 == 0
                      ? <br/>
                      : null
    } */}
 </div>
))}
</div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/All-Rounder-2-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{allRounder2.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
 </div>
))}
</div>
<figure style={{display: "table"}}>
        <img className ='wicketkeeperimage' src='https://sports-fantasy.in/wp-content/uploads/2023/03/Bowler-300x43.png'/>
  </figure>
  <div className='wicket_keeper_2'>
{bowler1.map((e,i)=>(
    <div className='test1'>
    <p className='test'>{e}</p>
   
 </div>
))}
</div>
<div className='telegramlink'>
    <figure>
                      <a rel="noopener" target="_blank" className="facebook_link" href="https://www.facebook.com/HUMSAFARBHAII?mibextid=ZbWKwL">
        <img src = {facebook} className='image'/></a>
        {/*<figcaption>*/}
        {/*    <strong>*/}
        {/*    <a rel="noopener"  target = "_blank" className ="facebook_link" href={location.state.facebook_link}>JOIN FACEBOOK LINK</a>*/}
        {/*    </strong>*/}
        {/*</figcaption>*/}
    </figure>
</div>
<hr/>

    <div className='telegramlink'>
    <figure>
                      <a rel="noopener" target="_blank" className="telegram_hyperlink" href="https://t.me/+m0i4xltrEzQzZWI9">
        <img src ={telegram} className='image'/></a>
        {/*<figcaption>*/}
        {/*    <strong>*/}
        {/*    <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={location.state.telegram_link}>JOIN TELEGRAM LINK</a>*/}
        {/*    </strong>*/}
        {/*</figcaption>*/}
    </figure>

              </div>
              <p>
                  <strong>NOTE</strong>: Join Our Telegram Channel For Daily Free Fantasy Teams
                  <a href="https://Humsafar.in/" target="_blank" rel="noreferrer noopener">
                      <strong>-Humsafar.in</strong>
                  </a></p>
  </CardContent>
    </Card>
    
  );
}
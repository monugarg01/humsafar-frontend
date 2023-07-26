import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card.css";
import { useNavigate } from 'react-router-dom'

export default function DataCard() {
const cardPerRow = 6;
const [data,setData] = useState([])
let history = useNavigate()
const [next, setNext] = useState(cardPerRow);
useEffect(()=>{
    getPostsData();
})
const getPostsData = () => {
    axios.get("http://localhost:4000/test")
    .then(data => setData(data.data))
    .catch(error => console.log(error));
    };  
    const handleMoreCard = () => {
        setNext(next + cardPerRow);
      };
      const navigateToNextPage = (e) =>{
        console.log(e)
        history('/totalprediction',{state:e})
      }
  return (
    <>
    <div className='container'>
    <div className='test'>
    { data !== undefined && data?.slice(0, next)?.map((dataa)=>(
    <Card sx={{width:"450px",height:"420px ",margin:'20px'}}>
    <>
      <CardMedia
        sx={{ height:250,width:450,borderRadius: "17px 17px 17px 17px",objectFit: "cover"}}
        image= {dataa.prediction_image_link}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color: '#303133'}}>
        {dataa.prediction_description}   
        </Typography>
        <Button size="small" onClick={(data)=>navigateToNextPage(dataa)}>Read More</Button>
      </CardContent>
      {/* <CardActions>
        
      </CardActions> */}
      </>
    </Card>
     ))}
     
    </div>
    {next < data?.length && (
        <div className='button'>
          <Button
            variant="contained"
            onClick={handleMoreCard}
          >
            Load more
          </Button>
          </div>
        )}
    </div>
    <div>
			<footer aria-label="Site" itemtype="https://schema.org/WPFooter" itemscope="">
	<div class="site">
		<div class="copyrightitems">
					<b>© 2023 Humsafar</b>
        </div>
			</div>
		</footer>
		</div>
    </>
  );
}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import InfoBox from './InfoBox';


export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    
    const API_URL = import.meta.env.VITE_URL;
    const API_KEY = import.meta.env.VITE_KEY;

    let getweatherInfo = async()=>{
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        } 
    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }
    let handelSubmit = async(evt)=>{
        try {
            evt.preventDefault();
            setCity("");
            let newInfo = await getweatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (error) {
            setError(true);
        }
   
    }

    return(
        <div className="SearchBox">
            
            <form onSubmit={handelSubmit}>
                <TextField id="city" label="City_Name" variant="outlined"  value={city} onChange={handleChange} size='small' />
                &nbsp; &nbsp;
                <Button variant="contained" onClick={handelSubmit} >Search</Button>
                {error && <p id='err'>No such place exist !</p>}
            </form>
            
        </div>
    )
    
}
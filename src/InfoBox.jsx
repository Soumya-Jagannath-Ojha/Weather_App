import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
  let cold_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hot_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainy_URL =
    "https://images.unsplash.com/photo-1496034663057-6245f11be793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="Infobox">
      <div className="card_container">
        <Card sx={{ maxWdth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rainy_URL
                : info.temp > 15
                ? hot_URL
                : cold_URL
            }
            alt="Weather Image"
          />
          <CardContent style={{ backgroundColor: "#f5f5f5" }}>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              &nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Min Temperature: {info.tempMin}&deg;C</p>
              <p>Max Temperature: {info.tempMax}&deg;C</p>
              <p>Humadity: {info.humidity}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

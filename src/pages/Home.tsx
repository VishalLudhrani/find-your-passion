import React from "react";
import { Button, Jumbotron, Typography } from "../components/UI";
import { WEBSITE_BACKGROUND_IMAGE_URL } from "../data/index";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-sky-100" style={{ backgroundImage: `url(${WEBSITE_BACKGROUND_IMAGE_URL})`, height: "100vh", backgroundSize: "cover" }}>
      <Jumbotron>
        <React.Fragment>
          <Typography type="h1">Turn Passion Into Profit</Typography>
          <Typography type="body1">An activity to help you find your passion</Typography>
          <Typography type="body2">
            <React.Fragment>
              Inspired by <a href="https://www.youtube.com/watch?v=BAzs3amtEFA" className="text-sky-300">The Futur's Ikigai Workshop</a> on YouTube.
            </React.Fragment>
          </Typography>
          <Button size="md" additionalClasses="mt-4" onClick={() => {navigate("/activity")}}>Start Activity</Button>
        </React.Fragment>
      </Jumbotron>
    </div>
  )
}

export default Home;
import React from "react";
import Jumbotron from "../UI";

const backgroundImgUrl = "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"

const Home: React.FC = () => {
  return (
    <div className="text-sky-100" style={{ backgroundImage: backgroundImgUrl ? `url(${backgroundImgUrl})` : "none", height: "100vh", backgroundSize: "cover" }}>
      <Jumbotron>
        <div className="my-32 text-center">
          <h1 className="text-6xl font-bold">Turn Passion Into Profit</h1>
          <p className="text-xl mt-4">An activity to help you find your passion.</p>
          <p className="text-md mt-2">Inspired by <a href="https://www.youtube.com/watch?v=BAzs3amtEFA" className="text-sky-300">The Futur's Ikigai Workshop</a> on YouTube.</p>
          <button className="my-4 bg-sky-400 text-white p-4 text-md font-medium rounded-md hover:bg-sky-500 shadow-md">Start Activity</button>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Home;
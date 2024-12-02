import React from "react";

const Navbar = () => {

  let newTime = new Date().toLocaleTimeString("de-DE");
  const [ time, setTime ] = React.useState(newTime);

  const UpdateTime = () => {
    const ctime = new Date().toLocaleTimeString("de-DE");
    setTime(ctime);
  }
  setInterval(UpdateTime, 1000);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{height: "56px"}}>
        <div className="container justify-content-center">
          <div className="text-white">{time}</div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar

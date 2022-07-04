import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function About() {
  const [darkLight, setDarkLight] = useState(true);
  const visualMode = () => {
    setDarkLight(!darkLight);
  };

  return (
    <div className="aboutUs" id={darkLight ? "light" : "dark"}>
      <div className="aboutHeader">
        <button onClick={visualMode}>
          {darkLight ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
      <div className="aboutContent">
        <div className="aboutImage"></div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          harum accusantium aperiam itaque eos consequuntur dolorum, soluta
          eaque tenetur dolore, iure voluptate est veritatis quidem
          necessitatibus qui cumque quia quod! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Laudantium harum accusantium aperiam
          itaque eos consequuntur dolorum, soluta eaque tenetur dolore, iure
          voluptate est veritatis quidem necessitatibus qui cumque quia quod!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          harum accusantium aperiam itaque eos consequuntur dolorum, soluta
          eaque tenetur dolore, iure voluptate est veritatis quidem
          necessitatibus qui cumque quia quod! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Laudantium harum accusantium aperiam
          itaque eos consequuntur dolorum, soluta eaque tenetur dolore, iure
          voluptate est veritatis quidem necessitatibus qui cumque quia quod!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          harum accusantium aperiam itaque eos consequuntur dolorum, soluta
          eaque tenetur dolore, iure voluptate est veritatis quidem
          necessitatibus qui cumque quia quod! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Laudantium harum accusantium aperiam
          itaque eos consequuntur dolorum, soluta eaque tenetur dolore, iure
          voluptate est veritatis quidem necessitatibus qui cumque quia quod!
        </p>
      </div>
    </div>
  );
}

export default About;

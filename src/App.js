import logo from "./logo.svg";
import "./App.css";
import { stagger, motion, animate } from "framer-motion";

const arr = [1, 2, 3, 4, 5];

;

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        {arr.map((_,index) => {
          return (
            <motion.div
              className="rectangles"
              initial={{scaleY:1,backgroundColor:"#FFFFFF"}}
              animate={{scaleY:[1.8,1,1],backgroundColor:"#00FFFF"}}
              transition={{duration:0.6,delay:0.13*index,repeatType:"mirror",repeat:Infinity,times:[0,0.2,0.5,1]}}
              
              
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

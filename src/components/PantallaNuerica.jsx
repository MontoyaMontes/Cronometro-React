import React, { useEffect, useState, useCallback } from "react";

export default function PantallaNuerica() {
    const styles = {
        btnCircleReset: {
            backgroundColor: "#3e3e3e",
            border: "3px solid #2c2c2c",
            width: "70px",
            height: "70px",
            borderRadius: "60px",
            fontSize: "19px",
            padding: "5px",
            margin: "0 15px 15px", 
        },
        btnCircleStart: {
            color: "#59d167",
            backgroundColor: "#172e1c",
            border: "3px solid #0e1b11",
            width: "70px",
            height: "70px",
            borderRadius: "60px",
            fontSize: "19px",
            padding: "5px",
            margin:" 0 15px 15px", 
        },
        btnCenter:{
            backgroundColor:"#3c3c3c",
            width: "20px",
            height: "20px",
            borderRadius:"42px",
            cursor:"pointer",
            color:"#ffffff",
            padding:"0px 5px",
            display:"inline-block",
            margin:" 0 5px 15px", 
        },
        clockContainer: {
            position: "relative",
            // backgroundColor: "#2ea31f",
    
            margin: "auto",
            height: "40vw",
            /*to make the height and width responsive*/
            width: "40vw",
            background: "url(https://media.geeksforgeeks.org/wp-content/uploads/20210302161254/imgonlinecomuaCompressToSizeOmNATjUMFKw-300x300.jpg) no-repeat",
            /*setting our background image*/
            backgroundSize: "100%",
        },
        
        analogHour: {
          backgroundColor: "#0d0d0d",
            width:" 1.8%",
            height: "25%",
            top: "25%",
            left: "48.85%",
            position: "absolute",
            background: "black",
            borderRadius: "10px",
            transformOrigin: "bottom",
        },
          
        analogMinute: {
            backgroundColor: "#0d0d0d",
            width: "1.6%",
            height: "30%",
            top: "19%",
            left: "48.9%",
            position: "absolute",
            background: "black",
            borderRadius: "10px",
            transformOrigin: "bottom",
        },
          
        analogSecond: {
            backgroundColor: "#0d0d0d",
            width: "1%",
            height: "40%",
            top: "9%",
            left: "49.25%",
            // opacity: "0.8",
            position: "absolute",
            background: "black",
            borderRadius: "10px",
            transformOrigin: "bottom",
        }
      }

    const [seconds, setSeconds] = useState(0)
    const [miliSeconds, setMiliSeconds] = useState(0)
    const [counter, setCounter] = useState(1)
    const [running, setRunning] = useState(true);

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    let miliSec = (miliSeconds) %1000;

    if (sec < 10){
        sec = "0" + sec
    }
    if (min < 60){
        min = "0" + min
    }
    
    if (miliSec < 100){
        if (miliSec < 10)
            miliSec = "0" + miliSec
        miliSec = "0" + miliSec
    }
  

    const toggleRunning = useCallback(() => 
        setRunning(run => !run
    ), []);

    const addLapse = () => {

        document.querySelector('.stop-button').removeAttribute("disabled")
        setCounter((counter) => counter + 1);

        const lapsoContador = document.createElement("div")
        const lapsoTiempo = document.createElement("div")
                
        const row = document.createElement("div")
        const li = document.createElement("li")
 
        lapsoContador.innerText = `Lap ${counter}`

        lapsoTiempo.innerText = `${min}:${sec}.${miliSec}`

        li.className="list-group-item text-white bg-transparent"
        row.className="row"

        lapsoContador.className="col"
        lapsoTiempo.className="col"

        li.appendChild(row)

        row.appendChild(lapsoContador)
        row.appendChild(lapsoTiempo)

        document.querySelector('.laps-container').appendChild(li)
    }

    const stopTimer = () => {
        clearInterval(setSeconds(0))
        clearInterval(setMiliSeconds(0))
        setCounter(1)
        document.querySelector('.laps-container').innerHTML = ""
    }

    useEffect(() => {

        if(!running){

            const intervalSec = setInterval(() => {
                setSeconds((counter) => counter + 1);
    
            }, 1000);
    
            const intervalMili = setInterval(() => {
                 setMiliSeconds((counter) => counter + 3);
             }, 1);
        
            return () => {
              clearInterval(intervalSec);
              clearInterval(intervalMili);
            };
        }
    }, [running]);

    return (

        <div className="counter-container">
            <div className="text-center my-5 bg-transparent" >
            <h1 className="display-1">{min}:{sec}.{miliSec}</h1>
            </div>

            {/* <div  style={styles.clockContainer}>
                <div className='min-analog' style={styles.analogMinute}></div>
                <div className='sec-analog' style={styles.analogSecond}></div>
            </div> */}

            <div className="text-center ">
                <button type="button" className="btn btn-secondary start-button" style={styles.btnCircleStart} onClick={toggleRunning}> {running ? 'Start' : 'Pause'}</button>
                {/* <div class="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-secondary" style={styles.btnCenter} onClick={setAnalog}>1</button>
                    <button type="button" class="btn btn-secondary" style={styles.btnCenter}>2</button>
                </div> */}
                <button type="button" className="btn btn-secondary start-button" style={styles.btnCircleReset} onClick={addLapse}>Lap</button>

                <button type="button" className="btn btn-secondary stop-button" style={styles.btnCircleReset} onClick={stopTimer}>Reset</button>

            </div>

            <div >
            <ul className="laps-container list-group text-center list-group-flush">

            </ul>
        </div>
        </div>
    )
}


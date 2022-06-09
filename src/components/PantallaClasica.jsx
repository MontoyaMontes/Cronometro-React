import React from 'react'

export default function PantallaClasica() {

  const styles = {
    clockContainer: {
        position: "relative",
        margin: "auto",
        height: "40vw",
        width: "40vw",
        background: "url(https://media.geeksforgeeks.org/wp-content/uploads/20210302161254/imgonlinecomuaCompressToSizeOmNATjUMFKw-300x300.jpg) no-repeat",
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
  
  setInterval(() => {
    let d = new Date(); //object of date()
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let minRotation = 6 * min;
    let secRotation = 6 * sec;
    min.style.transform = `rotate(${minRotation}deg)`
    sec.style.transform = `rotate(${secRotation}deg)`
  }, 1000);

  return (
    <div  style={styles.clockContainer}>
        <div  style={styles.analogMinute}></div>
        <div  style={styles.analogSecond}></div>
        <button type="button" class="btn btn-secondary start-button" style={styles.btnCircleStart} onClick={setInterval}>aa </button>
    </div>
  )
}

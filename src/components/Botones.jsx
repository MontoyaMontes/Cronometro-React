import React from 'react'

export default function Botones() {
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
        }
      }


  return (
    <div className="text-center ">
        <button type="button" class="btn btn-secondary" style={styles.btnCircleReset}>Reset</button>

        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary" style={styles.btnCenter}></button>
            <button type="button" class="btn btn-secondary" style={styles.btnCenter}></button>
        </div>
        <button type="button" class="btn btn-secondary" style={styles.btnCircleStart}>Start</button>

    </div>
  )
}

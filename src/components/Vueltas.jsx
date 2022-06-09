import React from 'react'

export default function Vueltas() {
    const styles = {
        
        listGroupLine:{
            borderTop: "1px solid #161616",
        }
      }
    return (
        <div >
            <ul class="list-group text-center list-group-flush">
                {/*  */}
                <li class="list-group-item text-white bg-transparent" style={styles.listGroupLine}>
                    <div class="row">
                        <div class="col" >
                            Lap 1
                        </div>
                        <div class="col">
                            00:05.81
                        </div>
                    </div>
                </li>
                {/*  */}

            </ul>
        </div>
    )
}

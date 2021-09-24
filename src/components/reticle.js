import React, { useRef, useState } from "react";
import "../styles/reticle.css"

const Reticle = (props) => {
    return(
        <div style={{display:props.display}} id="reticle">
            <i className="far fa-dot-circle"></i>
        </div>
    )
}

export default Reticle
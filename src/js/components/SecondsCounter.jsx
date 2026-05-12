import React from "react";

const SecondsCounter = (props) => {

    let unit = props.seconds.toString().padStart(6, "0");

    return (
        <div className="bigCounter">
            <div className="calendar"><i className="far fa-clock"></i></div>
            <div className="digit">{unit[0]}</div>
            <div className="digit">{unit[1]}</div>
            <div className="digit">{unit[2]}</div>
            <div className="digit">{unit[3]}</div>
            <div className="digit">{unit[4]}</div>
            <div className="digit">{unit[5]}</div>
        </div>
    );
};

export default SecondsCounter;
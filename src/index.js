import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


let curDate = new Date(2022, 12, 24, 1);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};


if(curDate>=1 && curDate < 12){
    greeting = "Good Morning";
    cssStyle.color = "Green";
}else if (curDate >= 12 && curDate < 19){
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
}else{
    greeting = "Good Night";
    cssStyle.color = "Black"
}
ReactDOM.render(
    <>
        <h>Hello Sir, <span style={cssStyle}>{greeting}</span></h>
    </>,
    document.getElementById("root")
);
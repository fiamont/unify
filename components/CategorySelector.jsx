import React from 'react'
import Image from 'next/dist/client/image';

function CategorySelector(category) {
    let outerBorder = "";
    let innerBorder = "";
    let categoryBox = "";
    let showUpBtn = "";
    let eventImage = "";

    if(category == "Konsert, Quiz & Uteliv") {
        outerBorder= "#DACAEF";
        innerBorder = "#C2A7E4";
        categoryBox = "#DACAEF";
        showUpBtn = "#C2A7E4";
        eventImage = "/konsertquizuteliv.png"
    }
    else if(category == "Kultur & Livsstil"){
        outerBorder = "#F7CDC9";
        innerBorder = "#F1ACA5";
        categoryBox = "#F7CDC9";
        showUpBtn = "#F1ACA5";
        eventImage = "/kulturlivsstil.png"
    }
    else if(category == "Sport & Fritid"){
        outerBorder = "#C1D8EB";
        innerBorder = "#97BEDD";
        categoryBox = "#C1D8EB";
        showUpBtn = "#97BEDD";
        eventImage = "/sport.png"
    }
    else if(category == "Mat & Dryck"){
        outerBorder = "#DBE6C9";
        innerBorder = "#C3D5A5";
        categoryBox = "#DBE6C9";
        showUpBtn = "#C3D5A5";
        eventImage = "/matdryck.png"
    }
    else if(category == "Konst & Hantverk"){
        outerBorder = "#FFE9C1";
        innerBorder = "#FFDB97";
        categoryBox = "#FFE9C1";
        showUpBtn = "#FFDB97";
        eventImage = "/konsthantverk.png"
    }
    else{
        outerBorder = "#808080";
        innerBorder = "#636363";
        categoryBox = "#808080";
        showUpBtn = "#0b4341";
    }

    return {outerBorder, innerBorder, categoryBox, showUpBtn, eventImage};
}

export default CategorySelector

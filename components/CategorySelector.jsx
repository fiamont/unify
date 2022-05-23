import React from 'react'
import Image from 'next/image';

function CategorySelector(category) {
    let lightColor = "";
    let darkColor = "";
    let categoryBox = "";
    let showUpBtn = "";
    let eventImage = "";

    if(category == "Nöje & Uteliv") {
        lightColor= "#DACAEF";
        darkColor = "#C2A7E4";
        categoryBox = "#DACAEF";
        showUpBtn = "#C2A7E4";
        eventImage = "/nojeuteliv.png"
    }
    else if(category == "Kultur & Livsstil"){
        lightColor = "#F7CDC9";
        darkColor = "#F1ACA5";
        categoryBox = "#F7CDC9";
        showUpBtn = "#F1ACA5";
        eventImage = "/kulturlivsstil.png"
    }
    else if(category == "Sport & Fritid"){
        lightColor = "#C1D8EB";
        darkColor = "#97BEDD";
        categoryBox = "#C1D8EB";
        showUpBtn = "#97BEDD";
        eventImage = "/sport.png"
    }
    else if(category == "Mat & Dryck"){
        lightColor = "#DBE6C9";
        darkColor = "#C3D5A5";
        categoryBox = "#DBE6C9";
        showUpBtn = "#C3D5A5";
        eventImage = "/matdryck.png"
    }
    else if(category == "Hantverk & Konst"){
        lightColor = "#FFE9C1";
        darkColor = "#FFDB97";
        categoryBox = "#FFE9C1";
        showUpBtn = "#FFDB97";
        eventImage = "/hantverkkonst.png"
    }
    else if(category == "Alla kategorier"){
        darkColor = "#D4BBA1";
    }
    else{
        lightColor = "#808080";
        darkColor = "#636363";
        categoryBox = "#808080";
        showUpBtn = "#0b4341";
    }

    return {lightColor, darkColor, categoryBox, showUpBtn, eventImage};
}

export default CategorySelector

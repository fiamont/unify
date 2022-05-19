import { useEffect, useState } from "react";
import style from './../styles/BackToTop.module.css' 
import ArrowToTop from "./Icons/ArrowToTop";

const BackToTop = () => {
    // The backToTop button is hidden at the beginning
    const [showButton, setShowButton] = useState(false)

    // Decide how far down you scroll before the button is visible
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
                } else {
                    setShowButton(false);
            }
        });
    }, []);


    // This function will scroll the window to the top agin
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        {showButton && (
            <button onClick={scrollToTop} className={style.BackToTop}><ArrowToTop/></button>
            )}
        </>
    );
};

export default BackToTop;
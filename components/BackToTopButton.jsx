import { useEffect, useState } from "react";
import style from './../styles/BackToTop.module.css' 
import ArrowToTop from "./Icons/ArrowToTop";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
                } else {
                    setShowButton(false);
            }
        });
    }, []);

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
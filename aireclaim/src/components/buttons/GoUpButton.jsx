
import React, {useState, useEffect} from 'react';

const GoUpButton = () => { 

    const [isVisible, setIsVisible] = useState(false);

    const setVisibility = () => {
        if(window.pageYOffset> 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }

    const goUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', setVisibility);
        return () => window.removeEventListener('scroll', setVisibility);
    }, []);

    return (
        isVisible && (
        <div className="">
            <button  
                class=" border-black p-1 rounded-md right-0  text-3xl  hover:bg-gray-900  bg-blue-300"
                onClick={goUp}>
                ⬆️
            </button>
        </div>
        )
    )
}

export default GoUpButton;
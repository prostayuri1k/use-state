import {useState} from "react";

const  HiddenText = () => {
    const [showText, setShowText] = useState(false)
    const handleClick = () => {
        setShowText(!showText);
    }
    return (
        <div>
            <button onClick={handleClick}>Показать/скрыть текст</button>
            {showText && <p>Какой-то текст</p>}
        </div>
    )
}

export default HiddenText;
import {useState} from "react";

const ColorButton = () => {
    const [color, setColor] = useState('red');
    const handleClick = () => {
        setColor(color === 'red' ? 'blue' : 'red');
    }

    const style = {
        color: color
    }

    return (
        <div>
            <button onClick={handleClick}>Change color</button>
            <p style={style}>Something text</p>
        </div>
    )
}

export default ColorButton;
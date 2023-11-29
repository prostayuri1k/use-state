import {useState} from "react";


const Textarea = () => {
    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <label>
                Enter your name:
                <input type={"text"} value={name} onChange={handleChange}/>
            </label>
            <p>Hi, {name}!</p>
        </div>
    )
}

export default Textarea;
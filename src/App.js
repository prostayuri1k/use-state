import Counter from "./Components/Counter";
import HiddenText from "./Components/Hidden-text";
import Textarea from "./Components/Textarea";
import ColorButton from "./Components/Color-button";


function App() {
    return (
        <div className="App">
            <Counter/>
            <p></p>
            <HiddenText/>
            <p></p>
            <Textarea/>
            <p></p>
            <ColorButton/>
        </div>
    );
}

export default App;

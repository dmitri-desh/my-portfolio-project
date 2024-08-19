import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {About} from "./layout/sections/about/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <About/>
        </div>
    );
}

export default App;
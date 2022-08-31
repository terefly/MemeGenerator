import troll from "./images/TrollFace.svg"
import Meme from "./Meme"

export default function App() {
    return (
        <div className="app">
            <header className="header">
                <img id="troll" src={troll} alt="trollface" />
                <h3 className="header_title">Генератор Мемов</h3>
            </header>
            <Meme />
        </div>
    )
}
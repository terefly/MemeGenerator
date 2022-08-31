import { useState, useEffect } from "react";

export default function Meme() {
    let [allMemes, setAllMemes] = useState("")
    let [meme, setMeme] = useState({
        url: "https://i.imgflip.com/30b1gx.jpg",
        topText: "",
        bottomText: "",
    })

    useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleClick() {
        const rundomNumber = Math.floor(Math.random() * allMemes.length)
        const newUrl = allMemes[rundomNumber].url
        console.log(`meme #${rundomNumber}`)
        setMeme(prevMeme => ({...prevMeme, url: newUrl}))
    }

    return (
        <main>
                <form className="meme_form">
                    <input 
                        onChange={handleChange}
                        value={meme.topText}
                        name="topText"
                        className="meme_input1" 
                        type="text"
                        placeholder="Верхний текст"
                    />
                    <input
                        onChange={handleChange}
                        value={meme.bottomText}
                        name="bottomText"
                        className="meme_input2" 
                        type="text "
                        placeholder="Нижний текст"
                    />
                    <button
                        onClick={handleClick}
                        className="meme_button" 
                        type="button"
                        >Найти новый мем
                    </button>
                </form>
                <div className="the-meme-box">
                    <div className="top-text">{meme.topText}</div>
                    <div className="bottom-text">{meme.bottomText}</div>
                    <img className="the-meme" src={meme.url} alt="" />
                </div>
        </main>
    )
}
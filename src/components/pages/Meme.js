import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    buttomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((response) => response.json())
    //   .then((results) => setAllMemes(results.data.memes));
  
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const results = await res.json();
      setAllMemes(results.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomMeme];
    setMeme((prevMeme) => ({ ...prevMeme, randomImg: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => (
      {
        ...prevMeme,
        [name]: value 
      }
    ));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          className="form-input"
          type="text"
          placeholder="Buttom text"
          name="buttomText"
          value={meme.buttomText}
          onChange={handleChange}
        />

        <button
          className="form-button"
          type="submit"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img
          src={meme.randomImg}
          alt="Meme"
          className="meme--image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.buttomText}</h2>
      </div>
    </main>
  );
}

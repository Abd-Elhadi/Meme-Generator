import React from 'react';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bij.jpg'
    });

    const [formData, setFormData] = React.useState({
        topText: '',
        bottomText: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({...prevFormData, [name]: value}))
    }
    
    const [allMemes, setAllMemes] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes));
    }, [])
    
    function getMemeImage(event) {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const randomMeme = allMemes[randomIndex];
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomMeme.url
            }
        });
    }

    return (
        <div>
            <main>
                <form onSubmit={getMemeImage} className="form">
                    <input
                        name='topText'
                        className="form-input"
                        placeholder="Top text"
                        type="text" 
                        onChange={handleChange}
                        value={formData.topText}
                    />
                    <input
                        name='bottomText'
                        className="form-input"
                        placeholder="Bottom text"
                        type="text" 
                        onChange={handleChange}
                        value={formData.bottomText}
                    />
                    <button onClick={getMemeImage} className="form-button">Get a new meme image 📸</button>
                </form>
                <div className='meme'>
                    <img className='meme-image' src={meme.randomImage} alt='random meme' />
                    <div></div>
                    {formData.topText && <h2 className='meme-text top'>{formData.topText}</h2>}
                    {formData.bottomText && <h2 className='meme-text bottom'>{formData.bottomText}</h2>}
                </div>
            </main>
        </div>
    )
}
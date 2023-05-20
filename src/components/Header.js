import trollFace from '../images/troll-face.png';

export default function Header(props) {
    return (
        <div>
            <header className='header'>
                <img className='header-image' src={trollFace} alt='troll face'></img>
                <h2 className='header-title'>Meme Generator</h2>
                <h4 className='header-project'>Memes Project</h4>
                {/* <h4>{props.user}</h4> */}
            </header>
        </div>
    )
}
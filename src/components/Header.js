import trollFace from '../images/troll-face.png';

export default function Header(props) {
    return (
        <header className='header'>
            <img className='header-image' src={trollFace} alt='troll face'></img>
            <h2 className='header-title'>Meme Generator</h2>
            <h4 className='header-project'>React Course - Project 3</h4>
            {/* <h4>{props.user}</h4> */}
        </header>
    )
}
import logo from '../assets/memeLogo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="avatar" className="meme-logo"/>
      <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  );
}
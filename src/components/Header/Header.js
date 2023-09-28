import './Header.css'

const Header = ({setPage}) =>
    <div className='header'>
        <h1>Ian Pomaznyuk</h1>

        <div>
            <button onClick={()=>setPage('about')}>About Me</button>
            <button onClick={()=>setPage('portfolio')}>Portfolio</button>
            <button onClick={()=>setPage('contact')}>Contact Me</button>
            <button onClick={()=>setPage('resume')}>Resume</button>
        </div>
    </div>

export default Header;
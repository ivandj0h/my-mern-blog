import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-title'>
            <span className='header-title-small'>MERN</span>
            <span className='header-title-large'>Blog</span>
        </div>
        <img className='header-img' src='https://wallpaperaccess.com/full/2499089.jpg' alt='' />
    </div>
  )
}

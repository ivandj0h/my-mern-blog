import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-title'>
            <span className='header-title-small'>Node with ReactJS</span>
            <span className='header-title-large'>Blog</span>
        </div>
        <img className='header-img' src='https://images.pexels.com/photos/5054770/pexels-photo-5054770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
    </div>
  )
}

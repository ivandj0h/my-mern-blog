import {
  Header,
  Posts,
  SideBar
} from '../../components'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
          <Posts />
          <SideBar />
      </div>
    </>
  )
}

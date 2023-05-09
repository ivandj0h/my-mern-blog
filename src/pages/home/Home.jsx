import {
  Header,
  Posts,
  SideBar,
  Single
} from '../../components'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
          <Single />
          <SideBar />
      </div>
    </>
  )
}

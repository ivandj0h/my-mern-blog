import './single.css'

import { 
  SideBar,
  SinglePost
} from '../../components'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar /> 
    </div>
  )
}

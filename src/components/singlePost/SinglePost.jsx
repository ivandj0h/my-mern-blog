import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src='https://images.pexels.com/photos/4496271/pexels-photo-4496271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          lore ipsum dolor sit amet
          <div className='singlePostEdit'>
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author : <b>ivandjoh</b></span>
          <span className='singlePostDate'>1 hous ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia inventore voluptatum animi assumenda ab illum, rerum aut, blanditiis nam impedit consequuntur optio vero dolorem veniam nobis dignissimos atque ullam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus debitis non mollitia molestias deserunt totam accusamus, tempora cum molestiae quo consequatur hic, itaque eaque ad facilis cumque ipsam possimus consequuntur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, nostrum dolores dolore dicta a ea numquam illum expedita architecto voluptatum facilis natus quisquam suscipit ad dignissimos molestiae vel reiciendis? Aut?

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia inventore voluptatum animi assumenda ab illum, rerum aut, blanditiis nam impedit consequuntur optio vero dolorem veniam nobis dignissimos atque ullam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus debitis non mollitia molestias deserunt totam accusamus, tempora cum molestiae quo consequatur hic, itaque eaque ad facilis cumque ipsam possimus consequuntur?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, nostrum dolores dolore dicta a ea numquam illum expedita architecto voluptatum facilis natus quisquam suscipit ad dignissimos molestiae vel reiciendis? Aut?
        </p>
      </div>
    </div>
  )
}

import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
        <p className='postDesc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti impedit sed! Accusantium esse facere culpa autem voluptatem iusto tempore, perspiciatis porro fuga omnis mollitia, animi saepe. Perferendis, ratione eius?
        </p>
      </div>
    </div>
  )
}

import './Post.css';

const Post = () => {
  return (
    <div className='post'>
        <img className='post-img' src='./Images/4.jpeg'></img>
        <div className='post-info'>
            <div className='post-category'>
                <span className='post-cat'>Music</span>
                <span className='post-cat'>Life</span>
            </div>
            <span className='post-title'> Lorem ipsum dolor sit amet cons </span>
            <hr />
            <span className='post-date'>1 hour ago</span>
        </div>
        <p className='post-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium quidem enim quod! Aspernatur sit quos veniam eaque recusandae nihil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, atque?
        </p>
     
    </div>
  )
}

export default Post

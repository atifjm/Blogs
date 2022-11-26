import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className='single-post'>
        <div className='single-post-wrapper'>
            <img src='./Images/header-img.jpeg' className='single-post-image'></img>
            <h1 className='single-post-title'>Lorem ipsum dolor sit amet.
            <div className="single-post-edit">
                <i className="single-post-icon fa-regular fa-pen-to-square"></i>
                <i className="single-post-icon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            
            <div className="single-post-info">
                <span className='single-post-author'>Author: <b>Atif Malik</b></span>
                <span className='single-post-date'>1 hour ago</span>
            </div>
            <p className='single-post-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus eum, amet cupiditate, non et vitae ut minus quia corrupti, autem corporis officiis facere exercitationem cumque commodi asperiores fugiat illum? Id quasi quidem, qui excepturi eum eos. Dignissimos recusandae, adipisci modi aperiam, commodi quod illo laborum veniam nesciunt enim facilis. Officia repellat quisquam repudiandae labore nemo iste, consequuntur fugiat impedit qui cumque fugit dolores amet ipsam? Necessitatibus culpa assumenda, autem veniam doloremque perspiciatis ipsam maiores, dicta eum pariatur facilis consequuntur quia error illum laudantium cum, nostrum aperiam aliquam nulla explicabo iure illo magni? Quaerat numquam maiores, recusandae sapiente odit officia.</p>
        </div>
    </div>
  )
}

export default SinglePost

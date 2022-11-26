import './Write.css';

const Write = () => {
  return (
    <div className='write'>
        <img className='write-img' src='./Images/2.jpeg'></img>
        <form className='write-form'>
            <div className='write-form-group'>
                <label htmlFor='fileInput'><i className="write-icon fa-regular fa-plus"></i></label>
                <input type='file' id='fileinput' style={{display:'none'}}></input>
                <input type='text' placeholder='Title' autoFocus={true} className='write-input'></input>
            </div>
            <div className="write-form-group">
                <textarea placeholder='Tell Your Story....' type='text' className='write-input write-text'></textarea>
            </div>
            <button className='write-submit'>Publish</button>

        </form>
      
    </div>
  )
}

export default Write

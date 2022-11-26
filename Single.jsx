import Sidebar from '../components/Sidebar';
import SinglePost from '../components/SinglePost';
import './Single.css';

const Single = () => {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default Single

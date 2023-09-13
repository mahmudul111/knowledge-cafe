import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddBookmark}) => {
    console.log(blog)
    const {title, cover, author, author_img, reading_times, posted_date,hashtags} = blog
    return (
        <div className='ml-10'>
            
            <img src={cover} className='w-full h-80 rounded-xl' alt={`cover picture of the title &{title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex gap-3 items-center'>
                <div>
                    <img src={author_img} alt="" />
                </div>
                <div >
                    <h2 className='text-3xl font-semibold'>{author}</h2>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span className='mr-3'>{reading_times} min read</span>
                    <button onClick={handleAddBookmark}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div>
                <h2 className="text-4xl mb-5 font-bold">{title}</h2>
                <p>
                    {
                        hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                    }
                </p>
                </div>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object
};

export default Blog;
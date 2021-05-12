import './Feed.css';
import React from 'react'
import TweetBox from './TweetBox';
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <Post />
        </div>
    )
}

export default Feed

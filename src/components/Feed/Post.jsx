import './Post.css';
import React from 'react'
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({displayName, username, verified, text, image, avatar}) => {
    return (
        <div className='post'>
            <div className="post-avatar">
            <Avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
            </div>

            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>Aman Singla 
                            <span className='special-Name'>
                            <VerifiedUserIcon className='post-badge'/> @aman_singla
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>Hi Guys!!.. How are you all...??</p>
                    </div>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8isBkPwzrHVXDm__R0uSXxI04tarCG6lxHu3IJsjgyiTpwbr7IiCfVva3o-4wZqqZWhE&usqp=CAU" alt="" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
          </div>
            </div>
        </div>
    )
}

export default Post

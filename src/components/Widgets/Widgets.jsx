import './Widgets.css';
import React from 'react';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search'

const Widgets =()=>{
    return (
        <div className='widgets'>
            <div className="widgets-input">
                <SearchIcon className='widgets-searchIcon'/>
                <input type="text" placeholder='Search Twitter' />
            </div>

            <div className="widgetsContainer">
                <h2>What's happening</h2>
                
                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="cleverqazi"
                options={{ height: 400 }}
                 />

                <TwitterShareButton
                url={"https://facebook.com/cleverprogrammer"}
                options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />

            </div>
        </div>
    )
}

export default Widgets;
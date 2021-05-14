import './TweetBox.css';
import React, {useState} from 'react'
import {Avatar, Button} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const TweetBox = () => {
    const [input, setInput] = useState('');
    const [tweets, setTweets] =useState([]);
    const [secondInput, setSecondInput]= useState('');
    const handleTweet = (event)=>{
        event.preventDefault();
        console.log(input);
        
        let date= new Date();
        let hours = date.getHours() > 12 ? date.getHours() -12 : date.getHours();
            let p= date.getMinutes();
            let minutes = p <10 ? '0'+p: p;
            let AM_PM = date.getHours() >= 12 ? 'PM' : 'AM';
            let timestamp = hours + ' : '+ minutes + ' '+AM_PM;

        // let x= tweets.slice();

        // x.push({'title': 'Aman Singla', "message": input, "time": timestamp, "image": secondInput})
        // x.reverse();
        setTweets([{'title': 'Aman Singla', "message": input, "time": timestamp, "image": secondInput} , ...tweets]);

        setInput('');
        setSecondInput('');
    }

    return (
        <>
        <div className='tweetBox'>
            <form >
                <div className="tweetBox-input">
                    <Avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>

                    <input type="text" placeholder='Whats happening?' value={input} onChange={(event)=> setInput(event.target.value)} />
                    
                </div>
                <input type='text' placeholder='Enter Image URL' className='secondInput' value={secondInput} onChange={(event)=>setSecondInput(event.target.value)}/>

                <Button 
                onClick = {handleTweet} className='tweetBox-tweetButton'>Tweet</Button>
            </form>
        </div>
        <div className='renderPost'>
        {
        tweets.map((tweet)=>(
            <div className='post' key={tweet.time}>
                <div className="post-avatar">
            <Avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
            </div>

            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>{tweet.title} 
                            <span className='special-Name'>
                            <VerifiedUserIcon className='post-badge'/> @aman_singla  {tweet.time}
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>{tweet.message}</p>
                    </div>
                </div>

              {tweet.image && <img src={tweet.image} alt="" />}

                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
          </div>
        </div>
    </div>
    ))
 }
    </div>
</>
    )
}

export default TweetBox

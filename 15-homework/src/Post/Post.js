import React from 'react';
import './Post.css';
function Post(props) {
    return (
        <div className="newPost">
            <div className='authorInfo'>
                <img className='ava' src={props.author.photo} alt='ava'/>
                <div className='nickName'>
                   <p className='data'> {props.author.name}</p>
                   <p className='data'> {props.author.nickname}</p>
                   <p className='data'> {props.date}</p>
                </div>
            </div>
            <div className='postInfo'>
                <p className='content'> {props.content}</p>
                <img className='postImage' src={props.image} alt=''/>
            </div>
        </div>
    )
}
export default Post;
import React, { Component } from 'react';
import './commentList.css'
// import PropTypes from 'prop-types'
import CommentItem from './comment-item'
class CommentList extends Component {

    // static PropTypes={
    //     comments:PropTypes.array.isRequired,
    // }

    render() {
        const display=this.props.comments.length==0?'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">List of Comments:</h3>
                <h2 style={{display}}>No comments now!</h2>
                <ul className="list-group">
                {
                    this.props.comments.map((item,index)=><CommentItem comment={item} key={index} removeComment={this.props.removeComment}index={index}/>)
                } 
                    
                </ul>
            </div>
        );
    }
}

export default CommentList;
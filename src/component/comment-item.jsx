import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './commentItem.css'
class CommentItem extends Component {

    // static PropTypes={
    //     comment:PropTypes.object.isRequired
    // }

    handleClick(){
        if(window.confirm(`Are you sure to delete comment of ${this.props.comment.username}`)){
        this.props.removeComment(this.props.index);
        }
        
    }


    render() {
        return (
                <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;"onClick={this.handleClick.bind(this)}>del</a>
                        </div>
                        <p className="user"><span >{this.props.comment.username}</span><span> said:</span></p>
                        <p className="centence">{this.props.comment.content}</p>
                </li>
        );
    }
}

export default CommentItem;
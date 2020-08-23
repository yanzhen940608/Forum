import React, { Component } from 'react';

import CommentAdd from './comment-add'
import CommentList from './comment-list'
class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            comments:[{username:'Tom',content:'React is brilliant'},
                    {username:'Jack',content:'React is not bad'}]
        }
    }

    addComment(comment){
        this.state.comments.unshift(comment);
        this.setState(this.state.comments)
    }
    removeComment(index){
        this.state.comments.splice(index,1)
        this.setState(this.state.comments)
    }
    
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Post your comments on React</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment.bind(this)}></CommentAdd>
                    <CommentList comments={this.state.comments} removeComment={this.removeComment.bind(this)}></CommentList>
                </div>
            </div>
        );
    }
}

export default App;
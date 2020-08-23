import React, { Component } from 'react';

class CommentAdd extends Component {
    
    submit(){

    const comment={username:this.nameInput.value,content:this.contentInput.value}
    
    this.props.addComment(comment)
    
    this.setState({
        username:'',
        content:''
    })
    }
    
    render() {
        return (
            <div className="col-md-4">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label>username</label>
                                <input type="text" className="form-control" placeholder="username" ref={input=>this.nameInput=input}/>
                            </div>
                            <div className="form-group">
                                <label>content of comments</label>
                                <textarea className="form-control" rows="6" placeholder="content of comments" ref={input=>this.contentInput=input}></textarea>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="button" className="btn btn-default pull-right" 
                                    onClick={this.submit.bind(this)}>submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
        );
    }
}

export default CommentAdd;
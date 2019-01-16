import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';
class FullPost extends Component {
    state = {
        loadedPost : null
    }
    componentDidUpdate() {
        //조건문 해석
        //loadedPost가 없을때 , 즉 아직 선택한 post가 없을때 axios로 호출
        //또는 loadedPost가 있고 (한번이라도 post를 선택 한 후)
        //선택된 loadedPost.id가 새로 선택된 props.id와 다를때 axios 호출
        //componentDidupdate를 제대로 제어를 하지 못하면 무한루프를 돌아 axios호출이 멈추지 않는다.
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(res => {
                        this.setState({loadedPost : res.data})
                    })
            }
        }
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + id)
            .then(res => {
                console.log(res);
            })
    }
    render () {
        let post = <p style = {{textAlign : 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style = {{textAlign : 'center'}}>Loading.....</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick  =  {()=> this.deletePostHandler(this.props.id)}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;
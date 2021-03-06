import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import Posts from "./Posts/Posts"
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/newpost">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
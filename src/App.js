import React, {useEffect, useState} from 'react';
import './App.css';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

const App = () => {
    const [postsMock, setPostsMock] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => setPostsMock(responseJson)
            );
    }, []);

    const addPost = (title, body) => {
        const newPost = {
            "id": postsMock.length + 1,
            "title": title,
            "body": body
        };
        let newList = [...postsMock, newPost];
        setPostsMock(newList);
    };

    return (
        <div>
            <header className="App-header">
                <PostForm onSubmit={(title, body) => addPost(title, body)}/>
                <PostsList posts={postsMock}/>
            </header>
        </div>
    );
};

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import PostsList from './components/PostsList';

const App = () => {
    const [postsMock, setPostsMock] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => setPostsMock(responseJson)
            );
    });

    return (
        <div>
            <header className="App-header">
                <PostsList posts={postsMock}/>
            </header>
        </div>
    );
};

export default App;

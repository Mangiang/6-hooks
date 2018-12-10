import React, {useState} from 'react';
import FavouriteToggle from './FavouriteToggle';

const Post = ({data}) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <li
            onClick={() => setExpanded(!isExpanded)}
            style={{
                backgroundColor: 'white',
                color: '#333',
                margin: '5px',
                padding: '10px',
                fontSize: '11pt',
                cursor: 'pointer'
            }}
        >
            <span style={{fontWeight: '900'}}>{data.title}</span>

            <FavouriteToggle style={{float: 'right'}}/>

            <div style={{display: isExpanded ? "block" : "none"}}>{data.body}</div>
        </li>
    )
};

export default Post;

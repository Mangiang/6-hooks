import React, {useState} from 'react';
import FavouriteToggle from './FavouriteToggle';
import ScoreCounter from './ScoreCounter';

const Post = ({data}) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <li
            style={{
                backgroundColor: 'white',
                color: '#333',
                margin: '5px',
                padding: '10px',
                fontSize: '11pt',
                cursor: 'pointer'
            }}
        >
            <span style={{fontWeight: '900'}}
                  onClick={() => setExpanded(!isExpanded)}>
                {data.title}
            </span>

            <ScoreCounter/>

            <FavouriteToggle style={{float: 'right'}}/>

            <div style={{display: isExpanded ? "block" : "none"}}>{data.body}</div>
        </li>
    )
};

export default Post;

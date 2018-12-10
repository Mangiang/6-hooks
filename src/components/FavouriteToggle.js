import React, {useState} from 'react';

const FavouriteToggle = ({style = {}}) => {
    const [isFavorite, setFavorite] = useState(false);

    return (<span onClick={() => setFavorite(!isFavorite)} style={style}>{isFavorite ? '♥️' : '♡'}</span> );
};

export default FavouriteToggle;

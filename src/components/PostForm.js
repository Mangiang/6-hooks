import React, {useRef} from 'react';

const PostForm = ({onSubmit}) => {
    const  titleRef = useRef();
    const bodyRef = useRef();

    return (<div>
        <input type={'text'} ref={titleRef}/>
        <input type={'text'} ref={bodyRef}/>
        <button onClick={() => onSubmit(titleRef.current.value, bodyRef.current.value)}>Submit</button>
    </div>)
};

export default PostForm;
import React from 'react';

const ImageView = ({imageDetail}) => { 
    return (<div className="image-container">
        <h3>Sample Image</h3>
            <img alt={imageDetail.title} src={imageDetail.url}/>
        </div>

    )
}


export default ImageView;
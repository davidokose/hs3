import React from 'react';

const ResultDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.channelTitle}</h4>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} />
                <p>Name: {video.snippet.title}</p>
                <p>Description: {video.snippet.description}</p>
                <p>ID: {video.snippet.channelId}</p>
                <p>Date: {video.snippet.publishTime}</p>
                <p>Height: {video.snippet.thumbnails.medium.height}</p>
            </div>
        </div>
    )
};

export default ResultDetail;
import './ResultItem.css';
import React from 'react';

const ResultItem = ({video, onResultSelect}) => {
    return (
        <div onClick={() => onResultSelect(video)} className="result-item item">
            <img className="ui avatar image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.channelTitle}</div>
                <div className="description">{video.snippet.channelId}</div>
                <div className="description">{video.snippet.publishTime}</div>
            </div>
        </div>
    );
};

export default ResultItem;
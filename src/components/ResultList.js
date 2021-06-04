import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({videos, onResultSelect}) => {
    const renderedList = videos.map((video) => {
        return <ResultItem key={video.id.videoId} onResultSelect={onResultSelect} video={video} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default ResultList;
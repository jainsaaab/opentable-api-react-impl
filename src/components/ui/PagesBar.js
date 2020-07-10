import React from 'react';

const PagesBar = (props) => {
    return (
        <div>
            <button className={'btn'} disabled={props.prevDisabled} onClick={props.prevClicked}>Previous Page</button>
            <strong>Current Page: {props.curPage}</strong>
            <button className={'btn'} disabled={props.nextDisabled} onClick={props.nextClicked}>Next Page</button>
        </div>
    )
}

export default PagesBar;
import React from 'react';

const PagesBar = (props) => {
    const divs = [];
    if(props.curPage == 1) {
        divs.push(<div key='prev'>&laquo;</div>);
    } else {
        divs.push(<div onClick={(e) => props.clicked(props.curPage - 1)} key='prev'>&laquo;</div>);
    }
    
    for(let i=1; i<=props.totalPages; i++) {
        let tmp;
        if(i == props.curPage) {
            tmp = <div key={i} onClick={(e) => props.clicked(e.target.innerHTML)} className='active'>{i}</div>
        } else {
            tmp = <div key={i} onClick={(e) => props.clicked(e.target.innerHTML)}>{i}</div>
        }
        divs.push(tmp);
    }

    if(props.curPage == props.totalPages) {
        divs.push(<div key='next'>&raquo;</div>);
    } else {
        divs.push(<div onClick={(e) => props.clicked(props.curPage + 1)} key='next'>&raquo;</div>);
    }
    
    return (
        <div className='center'>
            <div className='pagination'>
                {divs}
            </div>
        </div>
    )
}

export default PagesBar;
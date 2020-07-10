import React, { useState } from 'react';

const Filter = (props) => {
    const [text, setText] = useState('');
    
    const onChange = (t) => {
        setText(t);
        props.getFilterText(t.toLowerCase());
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='Filter: enter restaurant name / street / area to refine your search' 
                    value={text}
                    onChange={e => onChange(e.target.value)}
                    autoFocus />
            </form>
        </section>
    )
}

export default Filter;
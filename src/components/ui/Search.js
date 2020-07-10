import React, { useState } from 'react'

const Search = (props) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        props.getQuery(q);
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='enter city name' 
                    value={text}
                    onChange={e => onChange(e.target.value)}
                    autoFocus />
            </form>
        </section>
    )
}

export default Search;
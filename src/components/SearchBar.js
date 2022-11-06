import React, { useState, useRef, useEffect } from 'react'

const SearchBar = ({ OnSearchSubmit }) => {
    const [term, setTerm] = useState('');
    const [darkTheme, setDarkTheme] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, [])
    
    const onFormSubmit = event => {
        event.preventDefault();

        OnSearchSubmit(term);
    };
    return(
            <div style={{width: '70%', margin: '0 auto'}}>
                <form onSubmit={onFormSubmit}>
                    <div className="ui fluid massive icon input">
                        <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Find videos..." 
                        onChange={e => setTerm({term: e.target.value })}>
                            
                        </input>
                        <i className="search icon" />
                    </div>
                </form>
                <div style={{display: 'flex', justifyContent: 'center', padding: '15px'}}>
                    <button onClick={() => {
                        setDarkTheme(!darkTheme)
                        document.body.style.background = darkTheme ? '#0f0f0f' : '#ffffff'
                    }}>Switch Theme</button>
                </div>
                
            </div>
        );
};


export default SearchBar;
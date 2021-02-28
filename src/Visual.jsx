

function Visual(props) {
    const { toggleTheme, text, x } = props;

    return (
        <div className='container'>
            <div className='header'>
                <div className='name'>Chiil place</div>
                <input id="checkbox1" type="checkbox" onChange={toggleTheme}/>
                <label htmlFor="checkbox1">Mode switch</label>
            </div>
        <div className='text-area'>Sit back{text}{x}</div>
        </div>
    );
}

export {Visual}
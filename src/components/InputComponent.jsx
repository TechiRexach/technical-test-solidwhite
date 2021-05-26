import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const InputComponent = () => {

    const magicWord = 'abracadabra';
    const messageToShow = 'You typed the magic word!';

    const [input, setInput] = useState('');
    const [wellDone, setWellDone] = useState('');
    const [error, setError] = useState('');

    const magic = (e) => {
        e.preventDefault()
        if(input !== magicWord){
            setError('Sorry! Try again!')
            setInput('')
            setTimeout(() => {
                setError()
            }, 2500)
        }else{
            setWellDone(messageToShow)
            setInput('')
            setTimeout(() => {
                setWellDone()
            }, 2500)
        }
    };

    return (
        <div className='mt-5'>
            <form className="row formView">
                <div className="col-auto inputText">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Which is the magic word?" value={input} onChange={(e) => setInput(e.target.value)}/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={magic}>Try it!</button>
                </div>
            </form>
            {error && <h3 className='alert alert-danger messages'>{error}</h3>}
            {wellDone && <h3 className='alert alert-success messages'>Congratulations! {wellDone} 🪄</h3>}
            <button className="btn btn-outline-secondary mt-5">
                <Link to={'/'} >Go back</Link>
            </button>
        </div>
        
    )
}

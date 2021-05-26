import React from 'react'
import { Link } from 'react-router-dom'

export const HomeComponent = () => {
    return (
        <div className='mt-5'>
            <h1>What component do you want to see?</h1>
            <div className='homeButtons mt-5'>
                <button className="btn btn-outline-secondary">
                    <Link to={'/table'}>Table</Link>
                </button>
                <button className="btn btn-outline-secondary">
                    <Link to={'/input'}>Input</Link>
                </button>
            </div>
        </div>
    )
}

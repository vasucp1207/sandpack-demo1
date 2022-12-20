import React from 'react'
import './App.css'

function Header() {
    return (
        <div className='header'>
            <div>
                <img src='	https://storage.googleapis.com/candycode/jotai/jotai-mascot.png' alt='bhoot' />
            </div>
            <div className='right'>
                <h1>
                    Jotai
                </h1>
                <img className='github' src='/github.png' alt='github' />
            </div>
        </div>
    )
}

export default Header
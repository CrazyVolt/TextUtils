import React, { useState } from 'react'

const TextForm = ({heading, mode}) => {

    const [text, setText] = useState('Enter text here')

    const handleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleAbusiveWord = () => {
        const newText = text.split(' ')
        
        newText.forEach((word, i) => {
            if(word === 'fuck' || word === 'Fuck'){
                newText.splice(i, 1,'****')
            }
        })

        setText(newText.join(' '))
    }
    
    const handleClearText = () => {
        setText('')
    }

    const handleCopyText = () => {
        const copyText = document.getElementById('textArea')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)

    }

    return (
        <>
            <div style={{color: mode === 'dark'? 'white': 'black'}}>
                <div className="container my-3">
                    <h1> {heading} </h1>
                    
                    <div className="my-3">
                        <label htmlFor="textArea" className="form-label">Textarea</label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode==='dark'? '#343a40': 'white', color: mode === 'dark'? 'white': 'black'}} id="textArea" rows="5"></textarea>
                    </div>
                    
                    <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase </button>
                    <button className="btn btn-primary mx-2" onClick={handleAbusiveWord}> Filter </button>
                    <button className="btn btn-primary" onClick={handleCopyText}> Copy </button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}> Clear </button>
                </div>

                <div className="container my-3">
                    <h1>Text Summary</h1>
                    <p> Words: {text.length>0? text.trim().split(" ").length: 0} - Characters: {text.length} </p>
                    <p> { 0.008 * text.split(" ").length } Minutes required to read </p>
                </div>
            </div>
        </>
    )
}

export default TextForm

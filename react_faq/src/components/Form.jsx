import axios from 'axios';
import React, { useContext } from 'react';
import { FaqContext, TypedFaqContext } from '../contexts/FaqContext';

export const Form = () => {

    const [faqs, setFaqs] = useContext(FaqContext)
    const [typedText, setTypedText] = useContext(TypedFaqContext)

    const createFaq = () => {
        axios.post('http://localhost:8000/api/faqs/', typedText, {
            'Content-Type': 'application/json',
        })
            .then(res => setFaqs([...faqs, res.data]))
        setTypedText({
            type    : '',
            question: '',
            answer  : '',
            contrib : '',
            created : '',
        })
    }

    const handleInputChange = (evt) => {
        const name  = evt.target.name
        const value = evt.target.value
        setTypedText({...typedText, [name]:value})
    }

    return (
        <>
            <header>
                <p className="title">FAQ</p>
                <div className="form">
                    <div className="form-list-input">
                        <input type="text" name="type" placeholder="TYPE"
                            onChange={evt => handleInputChange(evt)} value={typedText.type} />
                    </div>
                    <div className="form-list-input">
                        <input type="text" name="question" placeholder="QUESTION"
                            onChange={evt => handleInputChange(evt)} value={typedText.question}  />
                    </div>
                    <div className="form-list-input">
                        <input type="text" name="answer" placeholder="ANSWER"
                            onChange={evt => handleInputChange(evt)} value={typedText.answer}/>
                    </div>
                    <div className="form-list-input">
                        <input type="text" name="contrib" placeholder="WHO"
                            onChange={evt => handleInputChange(evt)} value={typedText.contrib}/>
                    </div>
                    <div className="form-list-input">
                        <input type="date" name="created"
                            onChange={evt => handleInputChange(evt)} value={typedText.created}/>
                    </div>
                    <div>
                        <button onClick={createFaq}>SEND</button>
                    </div>
                </div>
            </header>
        </>
    )
}

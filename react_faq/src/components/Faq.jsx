import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaqContext } from '../contexts/FaqContext';

export const Faq = () => {

    const [faqs, setFaqs] = useContext(FaqContext)
    const [editedText, setEditedText] = useState({
        id      : 0,
        type    : '',
        question: '',
        answer  : '',
    })
    const [timeoutId, setTimeoutId] = useState(0)

    // 初回読込
    useEffect(() => {
        axios.get('http://localhost:8000/api/faqs/')
            .then(res => {
                setFaqs(res.data);
            })
    }, [])

    // Faq削除
    const deleteFaq = (id) => {
        axios.delete(`http://localhost:8000/api/faqs/${id}/`)
        .then(res => setFaqs(faqs.filter(faq => faq.id !== id)))
    }

    const handleInputChange = async(evt) => {
        clearTimeout(timeoutId)

        // 入力値を反映
        const id = evt.target.id
        const name = evt.target.name
        const value = evt.target.value

        // 編集中の faq を特定する
        editedText.id = parseInt(id, 10)
        setEditedText({ ...editedText, [name]: value })
        console.log(editedText)

        // 500ms 反応がなければリアルタイムで編集を反映させる
        const data = { [name]: value }
        const tId = setTimeout(() => {
            axios.put(`http://localhost:8000/api/faqs/${id}/`, data, {
                headers: { 'Content-Type': 'application/json', }
            })
                .then(res => {
                    setFaqs(faqs.map(faq => (faq.id === editedText.id ? res.data : faq)));
                    setEditedText({
                        id: 0,
                        type: '',
                        question: '',
                        answer: '',
                    });
                    console.log(res.data)
            })
        }, 500);
        setTimeoutId(tId)
    }

    return (
        <section className="container">
            {
                faqs.map(faq =>
                    <main className="items" key={faq.id}>
                        <div className="item">
                            <div className="item-question">
                                <p><input type="text"

                                    value={faq.id === editedText.id ? editedText.question : faq.question}

                                    name="question" id={faq.id} onChange={evt => handleInputChange(evt)} /></p>
                                <a href="#"><i className="down"></i></a>
                                {/* 削除ボタン */}
                                <button onClick={() => deleteFaq(faq.id)}>
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                            <div className="item-answer">
                                <p>{faq.answer}</p>
                                <span>{faq.contrib}</span>,<span>{faq.created}</span>
                                <a href="#"><i className="up"></i></a>
                            </div>
                        </div>
                    </main>
                )
            }
        </section>
    )
}

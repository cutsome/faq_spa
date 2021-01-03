import React, { useState } from 'react';
import './App.scss';
import { Faq } from './components/Faq';
import { Form } from './components/Form';
import { FaqContext, TypedFaqContext } from './contexts/FaqContext';

export const App = () => {

  const [faqs, setFaqs] = useState([])
  const [typedText, setTypedText] = useState({
        type    : '',
        question: '',
        answer  : '',
        contrib : '',
        created : '',
    })

  return (
    <FaqContext.Provider value={[faqs, setFaqs]}>
      <TypedFaqContext.Provider value={[typedText, setTypedText]}>
        <Form />
        <Faq />
      </TypedFaqContext.Provider>
    </FaqContext.Provider>
  );
}

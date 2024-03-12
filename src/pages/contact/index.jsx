import React from 'react';

import contact from '../styles/contact.css';
import  Navbar  from "../components/a_navbar";
import ContactForm from "../components/c_middleContact";

const ContactPage = () => {
  return (
    <main >
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      Aqui vai a pagina de Contatos, inserir formulário
    </main>
  )
}

export default ContactPage


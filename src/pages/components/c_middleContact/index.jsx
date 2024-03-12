import React from "react";
import styleForm from './styleFormCall.css';
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqezlyj");
  if (state.succeeded) {
      return <p className="msn_send" >Menssagem enviada! <br/> 
        Aguande nosso retorno!</p>;
  }

  return (
    <form  className="Form_full_call" onSubmit={handleSubmit}>
      <h2>Entre em contato conosco e tire suas dúvidas!</h2>
      <label htmlFor="nome">Nome*</label>
      <input  placeholder="nome..." id="nome" type="nome" name="nome" />

      <label htmlFor="email">Email*</label>
      <input  placeholder="exemple@email.com" id="email" type="email" name="email" />

      <label htmlFor="empresa">Empresa*</label>
      <input  placeholder="empresa..." id="empresa" type="empresa" name="empresa" />

      <label htmlFor="equipamento">Equipamento / Marca*</label>
      <input  placeholder="informe aqui..." id="equipamento" type="equipamento" name="equipamento" />

      <label htmlFor="modeloSerie">Modelo / Número de Série*</label>
      <input  placeholder="informe aqui..." id="modeloSerie" type="modeloSerie" name="modeloSerie" />

      <label htmlFor="modeloSerie">Modelo / Número de Série*</label>
      <input  placeholder="informe aqui..." id="modeloSerie" type="modeloSerie" name="modeloSerie" />

        Dano / Problema*
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea required className="txt_areaCall" placeholder="descreva o dano / problema..." id="dano" name="dano" />
      <ValidationError prefix="Dano" field="dano" errors={state.errors} />
      <button className="btn" type="submit" disabled={state.submitting}>
        ENVIAR
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
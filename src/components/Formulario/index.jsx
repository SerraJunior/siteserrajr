import React, { useState } from "react"
import "./style.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'

function Formulario() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [mensagem, setMensagem] = useState("")

  async function enviaFormulario() {

    const user = {
      name: name,
      email: email,
      telefone: telefone,
      msg: mensagem
    }

    const FormSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, "Nome muito pequeno!")
        .max(50, "Nome muito grande!")
        .required("Nome obrigatório"),

      telefone: Yup.string()
        .required("Telefone obrigatório")
        .matches(
          /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
          "Número de telefone inválido"
        ),

      email: Yup.string().email().required("Email obrigatório"),

      mensagem: Yup.string()
        .required("Mensagem obrigatório")
        .min(6, "Mensagem muito curta"),
    });

    const isValid = await FormSchema.isValid(user);
    if (isValid) {

      try {
        await axios.post("https://siteserrabackend.herokuapp.com/contatos", user)
        setName('')
        setEmail('')
        setTelefone('')
        setMensagem('')
        toast.success("Enviado com sucesso!")
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error("Dados em formato errado")
    }


  }

  return (
    <div className='formContainer'>
      <label className='labelFormulario'>
        Nome<br></br>
        <input value={name} onChange={(name1) => setName(name1.target.value)} name="name" className="contatoInput" required placeholder="Digite aqui seu nome" />
      </label>
      <br></br>
      <label className='labelFormulario'>
        E-mail<br></br>
        <input value={email} onChange={(email1) => setEmail(email1.target.value)} type="text" name="email" className="contatoInput" required placeholder="Digite aqui seu e-mail" />
      </label>
      <br></br>
      <label className='labelFormulario'>
        Telefone<br></br>
        <input value={telefone} onChange={(telefone1) => setTelefone(telefone1.target.value)} type="text" name="telefone" className="contatoInput" required placeholder="Digite aqui seu número" />
      </label>
      <br></br>
      <label className='labelFormulario'>
        Mensagem<br></br>
        <input value={mensagem} onChange={(mensagem1) => setMensagem(mensagem1.target.value)} type="text" name="mensagem" className="contatoInputMensagem" required placeholder="Digite aqui sua mensagem" />
      </label>
      <br></br>
      <button onClick={enviaFormulario} className='enviar' >
        Enviar
          </button>
      <ToastContainer />
    </div>

  )
}

export default Formulario
import React, { useRef, useState } from "react"
import "./style.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import ReCAPTCHA from "react-google-recaptcha";

function Formulario() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [msg, setMensagem] = useState("")
  const [captchaValue, setCaptchaValue] = useState("")
  const reRef = useRef()

  async function enviaFormulario() {

    if (!captchaValue) {
      return toast.error("Complete o captcha de verificação!")
    }

    const user = {
      name: name,
      email: email,
      telefone: telefone,
      msg: msg
    }

    const FormSchema = Yup.object().shape({
      name: Yup
        .string()
        .min(2)
        .max(50)
        .required(),

      email: Yup.string().email().required(),

      telefone: Yup
        .string()
        .min(10)
        .required(),

      msg: Yup
        .string()
        .required()
        .min(6),
    });

    const isValid = await FormSchema.isValid(user)

    if (isValid) {

      try {
        await axios.post("https://siteserrabackend.herokuapp.com/contatos", user)
        setName('')
        setEmail('')
        setTelefone('')
        setMensagem('')
        toast.success("Enviado com sucesso!")
      } catch (err) {
        toast.error("Tente novamente mais tarde")
      }
    } else {
      toast.error("Dados em formato errado")
    }
  }

  function captchaCarregou() {
    console.log("Captcha carregou")
  }

  return (
    <div className='formContainer'>
      <ToastContainer />
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
        <input value={msg} onChange={(msg) => setMensagem(msg.target.value)} type="text" name="mensagem" className="contatoInputMensagem" required placeholder="Digite aqui sua mensagem" />
      </label>
      <div style={{display: "flex", justifyContent: "center", marginBottom:"2%"}}>
        <ReCAPTCHA
          sitekey={"6LfilYYaAAAAANQsJHKElhstsacn2kVVUGiNnYW2"}
          onChange={(value) => setCaptchaValue(value)}
          ref={reRef}
        />
      </div>
      <button onClick={enviaFormulario} className='enviar'>
        Enviar
      </button>
    </div>
  )
}

export default Formulario
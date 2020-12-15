import React from "react"
import "./style.css"

function Formulario() {
    
    return (
        
        <div className = 'container'>
        
          <section className = 'coluna'>
            <form>
              <label className = 'labelFormulario'>
                Nome<br></br>
                <input type="text" id = "contatoNome" name="name" className = "contatoInput" required placeholder = "Digite aqui seu nome" />
            </label>
            <br></br><br></br>
            <label className = 'labelFormulario'>
                E-mail<br></br>
                <input type="text" id = "contatoNome" name="name" className = "contatoInput" required placeholder = "Digite aqui seu e-mail" />
            </label>
            <br></br><br></br>
            <label className = 'labelFormulario'>
                Telefone<br></br>
                <input type="text" id = "contatoNome" name="name" className = "contatoInput" required placeholder = "Digite aqui seu número" />
            </label>
            <br></br><br></br>
            <label className = 'labelFormulario'>
                Mensagem<br></br>
                <input type="text" id = "contatoNome" name="name" className = "contatoInputMensagem" required placeholder = "Digite aqui sua mensagem" />
            </label>
            <br></br><br></br>
              <input className = 'enviar' type="submit" value="Enviar" />
              </form>
              
          </section>
          
        </div>
       
    )
  }
  
  export default Formulario
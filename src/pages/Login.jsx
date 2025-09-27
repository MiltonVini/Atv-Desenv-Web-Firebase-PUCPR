import { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Input from '../components/Input'
import firebase from '../config/firebase'
import { ToastContainer, toast } from 'react-toastify'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        redirect: false
    }

    this.authenticate = this.authenticate.bind(this)
  }

    async authenticate(e) {
        e.preventDefault()
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.password
            )

            const userId = userCredential.user.uid
            localStorage.setItem('authToken', userId)

            this.setState({ redirect: true })

        } catch (error) {
            console.log(error)
            toast.error('E-mail ou senha incorretos');
        }
    }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/my-account" replace />;
    }

    return (
        <div className="form-container">
            <div>
            <h2>Página de Login</h2>
            </div>

            <div>
                <Input
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                />

                <button  className='inputButton' onClick={this.authenticate}>Acessar</button>

                <p>
                    Não possui acesso? <Link to={"/register"}>Cadastre-se</Link>
                </p>
            </div>

            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    )
  }
}

export default Login
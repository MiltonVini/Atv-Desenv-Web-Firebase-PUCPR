import { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import firebase from "../config/firebase"
import Button from "../components/Button";
import { toast, ToastContainer } from "react-toastify";

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            secondName: '',
            birthDate: '',
            email: '',
            password: '',
        }

        this.register = this.register.bind(this)
    }

    async register(e) {
        e.preventDefault()
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( async (data) => {
                await firebase.firestore().collection('users').doc(data.user.uid).set({
                    name: this.state.name,
                    secondName: this.state.secondName,
                    birthDate: this.state.birthDate,
                    email: this.state.email,
                })
            })

            toast.success("Usuário cadastrado com sucesso!")

            this.setState({
                name: '',
                secondName: '',
                birthDate: '',
                email: '',
                password: ''
            })
        } catch (error) {
            console.log('Erro ao cadastrar usuário: ', error)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={"/"}>Voltar</Link>
                </div>
                <div className="form-container">
                    <h2>Cadastre-se</h2>
                    <form onSubmit={(e) => this.register(e)}>
                        <Input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        />

                        <Input
                        type="text"
                        name="secondName"
                        placeholder="Digite o seu sobrenome"
                        value={this.state.secondName}
                        onChange={(e) => this.setState({ secondName: e.target.value })}
                        />

                        <Input
                        type="date"
                        name="birthDate"
                        placeholder="Digite a sua data de nascimento"
                        value={this.state.birthDate}
                        onChange={(e) => this.setState({ birthDate: e.target.value })}
                        />

                        <Input
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        />

                        <Input
                        type="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        />

                        <Button type="submit" label="Cadastrar"/>
                    </form>
                </div>
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        )
    }
}

export default Register

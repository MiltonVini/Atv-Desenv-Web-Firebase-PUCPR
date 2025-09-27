import { Component } from 'react';
import firebase from '../config/firebase'
import { Link } from 'react-router-dom';
import './MyAccount.css';

class MyAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authToken: '',
            userInfo: []
        }
    }

    async componentDidMount() {
        const userId = localStorage.getItem('authToken')
        if (!userId) return

        this.setState({ userId })

        const doc = await firebase.firestore().collection('users').doc(userId).get();
        console.log(doc.data())

        if (doc.exists) {
            this.setState({ userInfo: doc.data() });
        }
    }

    render() {
        const { userInfo } = this.state

        return (
            <div className='myaccount-container'>
                <div>
                    <Link to={'/'}>Sair</Link>
                </div>

                <div className='myaccount-info'>
                    <h2>Meu Perfil</h2>
                    <p>Nome: {userInfo.name} {userInfo.secondName}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Data de Nascimento: {userInfo.birthDate}</p>
                </div>
            </div>
        )
    }
}

export default MyAccount
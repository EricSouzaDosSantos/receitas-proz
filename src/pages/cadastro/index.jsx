import React, { useState } from 'react';
import './styles.css';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useActionData, useNavigate } from 'react-router-dom';


function App() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [containerActive, setContainerActive] = useState(false);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();




    const Cadastro = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, senha)
        .then((userCredential) =>{
            const user = userCredential.user;
            alert('Usuário cadastrado com sucesso!');
            navigate('/Efetuado'); 
        }).catch ((error) => {
            if (error.code === 'auth/email-already-in-use') {
                alert('E-mail já está em uso.');
            }else if(error.code == "Cannot read properties of undefined (reading 'user')"){
                alert('o email digitado já está em uso');
            } else {
                alert('Erro ao criar usuário: ' + error.message);
            }
        });
    }

    const Login = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuário logado:", user);
                navigate('/Efetuado');
            }).catch((error) => {
                if (error.message == "Cannot read properties of undefined (reading 'user')") {
                    alert('email ou senha incorreto')
                } else {
                    alert('Erro ao fazer login: ' + error.message);
                }
            });
    };

    const handleToggle = () => {
        setContainerActive(!containerActive);
    }

    return (
        <body className="body">
            
        <div className={`container ${containerActive ? 'active' : ''}`}>
            <div className="form-container sign-up">
                <form>
                    <h1>Criar Conta</h1>
                    <span>ou use seu email para se cadastrar</span>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}  required/>
                    <button onClick={Cadastro}>Cadastrar</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Entrar</h1>
                    <span>ou use seu email e senha</span>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <a href="#">Esqueceu sua senha?</a>
                    <button onClick={Login}>Entrar</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bem-vindo de volta!</h1>
                        <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                        <button className="hidden" id="login" onClick={handleToggle}>Entrar</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Olá, amigo!</h1>
                        <p>Cadastre-se com seus dados pessoais para usar todos os recursos do site</p>
                        <button className="hidden" id="register" onClick={handleToggle}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
        </body>

    );
}

export default App;

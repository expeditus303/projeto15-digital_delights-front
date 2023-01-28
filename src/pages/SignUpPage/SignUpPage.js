import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiAuth from '../../services/apiAuth.js';
import { SignUpContainer, Title,  FormContainer, TextContainer} from './SignUpCss.js';


export default function SignUpPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        password: '',
        email: '',
        confirmPassword: ''
    });

   function handleForm(e) {
    setForm({...form, [e.target.id]: e.target.value})
   }

    function createAccount (e) {
        e.preventDefault();

        if(form.password!== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        };

        //body without "confirmPassword"
        const body = {
            name: form.name,
            email: form.email,
            password: form.password
        };

        apiAuth
        .signUp(body)
        .then((res) => {
            console.log(res.data);
            navigate('/sign-in');
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    }

    return (
        <SignUpContainer>

            <Title>
                Digital Delights
            </Title>

            <FormContainer>
                <form onSubmit={createAccount}>
                    <input
                        id='name'
                        type='text'
                        value={form.name}
                        placeholder='Name'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='email'
                        type='email'
                        value={form.email}
                        placeholder='E-mail'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={form.password}
                        placeholder='Password'
                        onChange={handleForm}
                        required
                    />

                    <input
                        id='confirmPassword'
                        type='password'
                        value={form.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={handleForm}
                        required
                    />


                    <button type='submit' >Register</button>
                </form>

                <TextContainer>
                    <Link to='/sign-in'>
                        <h3>Do you already have an account? Sign in!</h3>
                    </Link>
                </TextContainer>
            </FormContainer>

        </SignUpContainer >
    )
}


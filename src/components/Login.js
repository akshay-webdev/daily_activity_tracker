
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import userData from '../utils/userData'
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = () => {
        const user = userData.find(u => u.name === name && u.password === password);
        if (user) {
            setError('')
            alert("login successfully");
            navigate('/home')
        } else {
            setError('Invalid User')
        }
    }

    return (
        <div>
            <div className="login-page bg-light pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-1">
                            <div className="bg-white shadow rounded">
                                <div className="row">
                                    <div className="col-md-12 pe-0">
                                        <div className="form-left h-100 py-5 px-5">
                                            <h5 className='text-center'>Login Here</h5>
                                            <form action="" className="row g-4">
                                                <div className="col-12">
                                                    <label>Username<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                        <input type="text" className="form-control" placeholder="For eg. john " value={name} onChange={e => setName(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="text" className="form-control" placeholder="For eg. 12345" value={password} onChange={e => setPassword(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 ms-auto">
                                                </div>

                                                <div className="col-12 m-auto d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-primary px-4 float-end mt-4" onClick={login}>login</button>
                                                </div>
                                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

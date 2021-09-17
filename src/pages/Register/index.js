import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import { useHistory } from 'react-router-dom';
import "./register.scss"


const Register = () => {
     const history = useHistory();
     return (
          <div className="main-page">
               <div className="left">
                    <img src={RegisterBg} className="bg-image" alt="image bg" />
               </div>
               <div className="right">
                    <p className="title">Register</p>
                    <Gap height={18} />
                    <Input label="Full Name" placeholder="Full Name" />
                    <Gap height={18} />
                    <Input label="Email" placeholder="Email" />
                    <Gap height={18} />
                    <Input label="Password" placeholder="Password" />
                    <Gap height={50} />
                    <Button title="Register" onClick={() => history.push('/')} />
                    <Gap height={100} />
                    <Link title="Kembali Ke Login" onClick={() => history.push('/login')} />
               </div>
          </div>
     )
}

export default Register

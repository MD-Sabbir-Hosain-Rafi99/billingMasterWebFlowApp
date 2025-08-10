// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [adminUsername, setAdminUsername] = useState('')
  const [adminPass, setAdminPass] = useState('')
  const [salerUsername, setSalerUsername] = useState('')
  const [salerPass, setSalerPass] = useState('')

  const handleAdminLogin = (e) => {
    e.preventDefault()
    if (adminUsername === 'admin' && adminPass === 'admin') {
      navigate('/admin')
    } else {
      alert('Wrong')
    }
  }

  const handleSalerLogin = (e) => {
    e.preventDefault()
    if (salerUsername === 'saler' && salerPass === '123') {
      navigate('/salesman')
    } else {
      alert('Wrong')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #0f0c29, #2b6340, #24243e)', fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        .main {
            width: 350px;
            height: 500px;
            background: red;
            overflow: hidden;
            background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
            border-radius: 10px;
            box-shadow: 5px 20px 50px #000;
        }

        #chk {
            display: none;
        }

        .signup {
            position: relative;
            width: 100%;
            height: 100%;
        }

        label {
            color: #fff;
            font-size: 2.3em;
            justify-content: center;
            display: flex;
            margin: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: .5s ease-in-out;
        }

        input {
            width: 60%;
            height: 10px;
            background: #e0dede;
            justify-content: center;
            display: flex;
            margin: 20px auto;
            padding: 12px;
            border: none;
            outline: none;
            border-radius: 5px;
        }

        button {
            width: 60%;
            height: 40px;
            margin: 10px auto;
            justify-content: center;
            display: block;
            color: #fff;
            background: #573b8a;
            font-size: 1em;
            font-weight: bold;
            margin-top: 30px;
            outline: none;
            border: none;
            border-radius: 5px;
            transition: .2s ease-in;
            cursor: pointer;
        }

        button:hover {
            background: #6d44b8;
        }

        .login {
            height: 460px;
            background: #eee;
            border-radius: 60% / 10%;
            transform: translateY(-180px);
            transition: .8s ease-in-out;
        }

        .login label {
            color: #573b8a;
            transform: scale(.6);
        }

        #chk:checked ~ .login {
            transform: translateY(-500px);
        }

        #chk:checked ~ .login label {
            transform: scale(1);
        }

        #chk:checked ~ .signup label {
            transform: scale(.6);
        }
      `}</style>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleAdminLogin}>
            <label htmlFor="chk" aria-hidden="true">Admin</label>
            <input
              type="text"
              placeholder="User name (admin)"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password (admin)"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleSalerLogin}>
            <label htmlFor="chk" aria-hidden="true">Sales Man</label>
            <input
              type="text"
              placeholder="User name (saler)"
              value={salerUsername}
              onChange={(e) => setSalerUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password (123)"
              value={salerPass}
              onChange={(e) => setSalerPass(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
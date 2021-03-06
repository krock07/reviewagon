import React, {Component, createContext} from 'react'
import axios from 'axios'
import Authenticate from '../Helpers/Authenticate'

const AuthContext = createContext()

class AuthProvider extends Component {
  state = { isAuth: false, email: '' }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    Authenticate()
    .then( (resp) => this.setState({ ...resp }) )
    .catch( err => console.log(err))
  }

  login = (user, props, e) => {
    e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
      
    axios.post('/api/v1/auth', { user: { ...user } }, { withCredentials: true })
    .then( _resp => {
      this.setState({ isAuth: true })
      props.history.push("/")
    })
    .catch( err => console.log(err))
  }

  signup = (user, props, e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/registrations', { user: { ...user } }, { withCredentials: true })
    .then( resp => {
      this.setState({ isAuth: true })
      props.history.push("/")
    })
    .catch( err => console.log(err))
  }

  
  logout = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.delete('/api/v1/auth/logout')
    .then( _resp => {
      this.setState({ isAuth: false })
      window.location.href = '/'
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          email: this.state.email,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
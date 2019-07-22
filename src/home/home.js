import React from 'react'
import { Link } from 'react-router-dom';

import { createStore } from './../state/store/store'
import { connect } from 'react-redux'
import { registerUser } from './../state/actions/actions'


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        };
        this.onRegisterUser = this.onRegisterUser.bind(this);
    }

    registerUser() {
        this.setState({
          userName: this.state.userName
        })
    }

    onChangeInput(e) {
        this.setState({
          userName: e.target.value
        })
    }

    onRegisterUser(event){
        this.props.onRegisterUser(event.target.value);
    }

    render() {
          
        return (
            <div className="container safari-zone col col-8 pt-5">
                <div className="justify-content-center">
                    <div className="form-group text-center">
                        <h3 className="font-weight-bold text-white">Welcome to Safari Zone!</h3>
                        <p className="text-justify text-white">This is a special zone to catch unique Pokemons! There is no fighting here. You go inside, pet and feed the pokemons. And if they like you, you may even catch them!</p>
                        <p className="text-justify text-white">Choose your level, catch them all, and you may win a prize!</p>
                        <input type="text" className="form-control" 
                            placeholder="What is your name?"
                            onChange={this.onRegisterUser}/>
                        <Link to={'/SafariZone'} onClick={this.onRegisterUser} className="btn btn-success m-2"> Enter </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.userName 
})

const mapActionToProps = {
    onRegisterUser: registerUser
}

export default connect(mapStateToProps, mapActionToProps)(Home)

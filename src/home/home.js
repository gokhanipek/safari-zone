import React from 'react'
import { Link } from 'react-router-dom';

import { createStore } from './../state/store/store'
import { connect } from 'react-redux'
import { registerUserAction } from './../state/actions/actions'


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          input: '',
        };
      }

    onSubmit = () => {
        this.props.registerUser(this.state.input);
        this.setState({input: ''});
      }

      onChange = (e) => {
        this.setState({input : e.target.value});
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
                            value={this.state.input} 
                            onChange={ this.onChange } />
                        <Link to={'/SafariZone'}  onClick={this.onSubmit} value={this.state.input} className="btn btn-success m-2"> Enter </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { gameDetails: state.gameDetails }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (payload) => {
      dispatch(registerUserAction(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

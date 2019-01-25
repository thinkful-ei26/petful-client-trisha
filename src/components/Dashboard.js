import React, {Component} from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import '../index.css';

import { fetchCat } from '../actions/cat'
import { fetchDog } from '../actions/dog'

export class Dashboard extends Component {

  componentDidMount(){
    Promise.all([
      this.props.dispatch(fetchCat()),
      this.props.dispatch(fetchDog())
    ])
  }

  render() {
    const {catToAdopt, dogToAdopt, onAdoptPet } = this.props;
    
    return (
      <main className="container">
       <Pet pet={catToAdopt} onAdoptPet={() => console.log('clicked cat')} />
       <Pet pet={dogToAdopt} onAdoptPet={() => console.log('clicked dog')}/>
     </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    catToAdopt: state.catsReducer.pet,
    dogToAdopt: state.dogsReducer.pet
  }
}

export default connect(mapStateToProps)(Dashboard)
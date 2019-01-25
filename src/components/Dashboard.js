import React, {Component} from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import '../index.css';

import {
  fetchCat, 
  // fetchDog, 
  // onAdoptPet
} from '../actions'

export class Dashboard extends Component {

  componentDidMount(){
    // const {fetchCat, /* fetchDog, */ dispatch} = this.props;
    // dispatch(fetchCat());
    /* dispatch(fetchDog()); */

    //promise all is an array
    this.props.dispatch(fetchCat())
    // Promise.all(this.props.dispatch(fetchCat()))
  }

  render() {
    const {catToAdopt, /* dogToAdopt,  onAdoptPet */} = this.props;
    console.log(this.props);
    return (
      <main className="container">
       <Pet pet={catToAdopt} onAdoptPet={() => console.log('clicked cat')} />
       {/* <Pet pet={dogToAdopt} onAdoptPet={() => console.log('clicked dog')}/> */}
     </main>
    );
  }
}

const mapStateToProps = state => {
  console.log('HERE',state);
  return {
    catToAdopt: state.catsReducer.pet,
    /* dogToAdopt: state.dogsReducer.pet */
  }
}

export default connect(mapStateToProps)(Dashboard)
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';
import '../index.css';

import {
  fetchCat, 
  fetchDog, 
  adoptCat, 
  adoptDog
} from '../../actions'

// export default function Dashboard(props) {
//   const { catToAdopt, dogToAdopt } = props;
//   console.log('pet props:',props);
//   return (
//     <main className="container">
//       <Pet pet={catToAdopt} onAdoptPet={() => console.log('clicked cat')} />
//       <Pet pet={dogToAdopt} onAdoptPet={() => console.log('clicked dog')}/>
//     </main>
//   );
// }

export class Dashboard extends Component {

  componentDidMount(){
    const {fetchCat, fetchDog, dispatch} = this.props;
    dispatch(fetchCat());
    dispatch(fetchDog());
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
    catToAdopt: state.catsReducer.cat,
    dogToAdopt: state.dogsReducer.dog
  }
}

export default connect(mapStateToProps)(Dashboard)
import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounter}  />

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store results</button>
                <ul>
                    {this.props.storedResults.map(storedResult => {
                        return <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    })}
                </ul>
                
            </div>
        );
    }
}

// Map redux state to class/function props
// state-> state stored in redux as input
const mapStateToProps = state =>{
    return{
        // left is the props you want map to state in redux. right is the state in redux
        // ctr and res becos of the combined reducer in index.
        ctr: state.ctr.counter, // this is the state.counter in redux
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return{
        // Type: left(type) is the props method you want to map in redux. right is to determine the action type in redux store
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        subtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (currCount) => dispatch({type: actionTypes.STORE_RESULT, counterRes: currCount}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
}

// connect is a function that takes in a function as an input, outputs a function to take in counter
// this maps the redux state to the class/function props
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
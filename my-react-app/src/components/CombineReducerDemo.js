import React, { Component } from 'react';
import {connect} from 'react-redux'

class CombineReducerDemo extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <span>CounterA:</span>
                    <span>{this.props.counterA}</span>
			    </div>
                <button onClick={() => this.props.updateCounterA(this.props.counterB)}>Update A</button>
                <div className="col">
                    <span>CounterB:</span>
                    <span>{this.props.counterB}</span>
			    </div>
                <button onClick={() => this.props.updateCounterB(this.props.counterA)}>Update B</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        counterA : state.rA.counterA,
        counterB : state.rB.counterB
    }
}
        
const mapDispatchToProps=(dispatch)=>{
    return{
        updateCounterA: counterB =>dispatch({type:'UPDATE_A',bValue:counterB}),
        updateCounterB: counterA =>dispatch({type:'UPDATE_B',aValue:counterA})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CombineReducerDemo);
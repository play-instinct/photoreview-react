import React from 'react';
import { connect } from 'react-redux';
import {fetchStatus} from '../../actions';

class Status extends React.Component {
    componentDidMount(){
        this.props.fetchStatus()
    }

    render(){
        return (
            <div>
                {this.props.appState.statusText}
            </div>
        )
    }
}


const mapStatetoProps = state => ({
    appState: state.appState
})

export default connect(mapStatetoProps, {fetchStatus})(Status);
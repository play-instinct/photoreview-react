import React from 'react';
import { connect } from 'react-redux';


import Spinner from '../../components/spinner/Spinner.component';

import styles from './Loader.container.scss';

class Loader extends React.Component {
    componentDidMount() {
        this.props.fetchUsersInfo();
    }

    render() {
        return (
            <div styleName="ptt-loader">
                    <div styleName="spinner-wrapper">
                        <Spinner />
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        );
    }
}




export default Loader;

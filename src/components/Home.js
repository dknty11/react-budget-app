import React, { Component } from 'react';
import { getUser } from '../actions/users'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            age: ''
        }
    }
    componentWillMount() {
        this.props.getUser();
    }
    render() {
        return (
            <div>
                Home Component
            </div>
        );
    }
}

Home.propTypes = {
    getUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { getUser })(Home)
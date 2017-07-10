import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getContentStateByName } from '../ContentState';
import { makeGithubFetch } from '../ContentActions';
import RepositoryView from './RepositoryView';
import '../contentDisplay.css';

class About extends Component {
    constructor(){
        super();
        this.renderRepos = this.renderRepos.bind(this);
    }

    componentWillMount(){
        if (!this.props.repositories){
            this.props.fetchRepositories();
        }
    }

    renderRepos(){
        if (!this.props.isLoading && this.props.repositories){
            return (
                <div className="repository-views">
                    {this.props.repositories.map(
                        (repo, index) => <RepositoryView key={repo.id} repoIndex = {index} repo={repo}/>
                    )}
                </div>
            );
        } else {
            return null;
        }
    }

    render(){
        return this.renderRepos();
    }
}
About.propTypes = {
    fetchRepositories: PropTypes.func,
    isLoading: PropTypes.bool,
    repositories: PropTypes.array
};
const mapStateToProps = (state)=> {
    return {
        isLoading: getContentStateByName(state, 'loading'),
        repositories: getContentStateByName(state, 'repositories')
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        fetchRepositories: () => dispatch(makeGithubFetch(dispatch))
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(About);

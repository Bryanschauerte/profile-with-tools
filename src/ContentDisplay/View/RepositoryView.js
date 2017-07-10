import React from 'react';
import { PropTypes } from 'prop-types';
import prettydate from 'pretty-date';
import Card from '../../Layout/Card';
import '../contentDisplay.css';

const RepositoryView = ({ repo, repoIndex }) => {
    return (
        <div className="repository-view">
            <div className="repository-number">
                {repoIndex + 1} of the 30 latest
            </div>
            <div className="repository-view-intro">
                {repo.name}
            </div>
            <div className="repository-description">
                Description: {repo.description}
            </div>
            <div className="repository-created_at">
                Was created {prettydate.format(new Date(repo.created_at))} and last updated {prettydate.format(new Date(repo.updated_at))}
            </div>
            <div className="repository-url">
                <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>Link to see on GitHub</a>
            </div>
        </div>
    );
};

RepositoryView.propTypes = {
    repo: PropTypes.any,
    repoIndex: PropTypes.number
};

export default RepositoryView;

import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import createBrowserHistory from '../history';

const App = () => {
    return (
    <div className="ui container">
        <Router history={createBrowserHistory}>
            <div>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </Router>
    </div>
    );
};

export default App;

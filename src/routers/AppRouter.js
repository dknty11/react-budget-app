import React from 'react';
import Create from '../components/CreatePage';
import App from '../App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={App} exact={true}></Route>
        <Route path="/create" component={Create}></Route>
        <Route path="/edit/:id" component={EditPage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
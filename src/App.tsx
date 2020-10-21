import React from 'react';
//Routes
import SignIn from './views/sign-in/SignIn';
import MainLayout from './layouts/MainLayout';
import Dashboard from './views/dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './views/sign-up/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/">
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

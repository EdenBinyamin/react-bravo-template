import AuthNavigation from 'features/authentication/navigation/AuthNavigation';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const Navigation = () => (
  <Router>
    <Switch>
      <Route exact path="/login" render={() => <AuthNavigation />} />
      <Route exact path="/" render={() => <div />} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);
export default Navigation;

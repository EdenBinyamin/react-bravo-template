import { Route } from 'react-router-dom';
import Login from '../screens/Login/Login';

const AuthNavigation = () => (
  <>
    <Route exact path="/login" render={() => <Login />} />
    <Route exact path="/forgot-password" render={() => <div />} />
  </>
);
export default AuthNavigation;

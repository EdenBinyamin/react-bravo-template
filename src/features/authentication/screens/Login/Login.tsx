import GenericInput from 'features/authentication/components/genericInput/GenericInput';
import {
  setEmail,
  setPassword,
} from 'features/authentication/reducer/authSlice';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';
import './Login.scss';

const EmailInput = () => {
  const [t] = useTranslation();
  const email = useAppSelector(state => state.auth.email!);
  return (
    <GenericInput type="text" value={email} setValue={setEmail} name="email">
      {t('email')}
    </GenericInput>
  );
};

const PasswordInput = () => {
  const [t] = useTranslation();
  const password = useAppSelector(state => state.auth.password!);
  return (
    <GenericInput
      type="password"
      value={password}
      setValue={setPassword}
      name="password"
    >
      {t('password')}
    </GenericInput>
  );
};

const Login = () => (
  <div className="flex-evenly column login-container">
    <EmailInput />
    <PasswordInput />
  </div>
);

export default Login;

import LoginForm from 'components/LoginForm/LoginForm';
import { RegisterBox, RegisterSection, Text } from './Register.styled';

const Login = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <Text>Sing In</Text>
        <LoginForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Login;

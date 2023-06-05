import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterSection, RegisterBox, Text } from './Register.styled';

const Register = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <Text>Sing Up</Text>
        <RegisterForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Register;

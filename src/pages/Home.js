import { HomeSection, HomeTitle, TextBox, Border } from './Home.styled';
// import Phone from '../images/phone.png';
// import Logo from '../images/logo.png';

const Home = () => {
  return (
    <HomeSection>
      <TextBox>
        <HomeTitle>
          {' '}
          Streamline your <br /> contacts <br />
          effortlessly
        </HomeTitle>
        <Border></Border>
      </TextBox>
    </HomeSection>
  );
};

export default Home;

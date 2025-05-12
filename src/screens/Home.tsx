import Container from '../components/Container.tsx';
import '../App.css';
import { useNavigate } from 'react-router';

const Home = () => {
  const nav = useNavigate();

  return (
    <Container>
      <view>
        <text className="title">Home</text>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut illum at,
          voluptates ipsa dolores perferendis consequatur tempora, vero a veniam
          provident ducimus ipsam ipsum non ex? Et sequi dignissimos quia.
        </text>
        <text bindtap={() => nav('/')} className="text-xl font-semibold">
          Back
        </text>
      </view>
    </Container>
  );
};

export default Home;

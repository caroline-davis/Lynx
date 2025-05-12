import { useState } from '@lynx-js/react/legacy-react-runtime';
import './App.css';
import Wrapper from './components/Wrapper.tsx';
import { useNavigate } from 'react-router';

export function App() {
  const [count, setCount] = useState(0);
  const nav = useNavigate();

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  console.log(count, 'countValue');
  return (
    <view className="app">
      <Wrapper>
        <view className="counter">
          <text className="title">Our counter app </text>
          <view className="flex items-center justify-center gap-5 bg-pink">
            <view className="counterBtn">
              <text className="text-3xl font-semibold" bindtap={minusCount}>
                -
              </text>
            </view>
            <text className="countValue">{count}</text>
            <view className="counterBtn">
              <text className="title" bindtap={addCount}>
                +
              </text>
            </view>
          </view>
          <view className="resetBtn" bindtap={() => setCount(0)}>
            <text>Reset Count</text>
          </view>
        </view>
        <view>
          <text bindtap={() => nav('/home')} className="title">
            Home
          </text>
          <text bindtap={() => nav('/product')} className="title">
            Product
          </text>
        </view>
      </Wrapper>
    </view>
  );
}

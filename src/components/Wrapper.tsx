interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <view className="wrapper"> {children}</view>;
};

export default Wrapper;

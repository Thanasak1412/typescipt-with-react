import { useState } from "react";

type Who = {
  name: string;
  friend: string;
};

type Props = {
  who: Who;
  renderMessage?: (message: string) => React.ReactNode;
  message?: string;
};

const Hello = ({ who, renderMessage, message = "How are you." }: Props) => {
  // Strongly-typed with useState
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>Hello: {who.name}</p>
      {who.friend && "My friend."}
      {message && (renderMessage ? renderMessage(message) : <p>{message}</p>)}
      <p>count: {count}</p>
      <pre>
        <button onClick={onClick}>Increase</button>
      </pre>
    </>
  );
};

export default Hello;

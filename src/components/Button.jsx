import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <button
      className="button"
      onClick={handleLike}
    >
      Like ({count})
    </button>
  );
};

export default Button;
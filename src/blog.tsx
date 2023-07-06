import React, { useState, useEffect } from "react";

const Blog: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve visitor count from local storage on component mount
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setVisitorCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    // Update local storage with visitor count on count change
    localStorage.setItem("visitorCount", String(visitorCount));
  }, [visitorCount]);

  const incrementCounter = () => {
    setVisitorCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <img src="https://14068d66ba387efac9ce5e4b1741bcf2.r2.cloudflarestorage.com/ai-api/07-23/dddb9dd4-fe7e-4fba-bbf8-9a1eb5caea44_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=16b502c87564788383d52ec498a61a24%2F20230706%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230706T214950Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=447f30fca049a232ca8f5c98e1053b25bc8ddf965b9238b80ab133311f6a000c" alt="Blog Photo" />
      <p>Visitor Count: {visitorCount}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default Blog
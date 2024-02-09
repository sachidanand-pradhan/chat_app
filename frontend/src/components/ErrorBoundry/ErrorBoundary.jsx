import React, { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by error boundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render a fallback UI or display an error message
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};

export default ErrorBoundary;

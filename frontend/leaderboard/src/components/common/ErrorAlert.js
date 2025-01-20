import React from "react";
import { AlertCircle } from "lucide-react";
import { useApp } from "../../context/AppContext";

const ErrorAlert = () => {
  const { error, setError } = useApp();

  if (!error) return null;
  return (
    <div className="fixed top-4 right-4 bg-primary-100 text-bg-100 p-4 rounded-lg shadow-lg flex items-center gap-2">
      <AlertCircle size={20} />
      <p>{error}</p>
      <button
        onClick={() => setError(null)}
        className="ml-4 text-bg-100 hover:text-bg-200"
      >
        ×
      </button>
    </div>
  );
};

export default ErrorAlert;

import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <Loader2 className="animate-spin" />
      Loading...
    </div>
  );
};

export default Loader;

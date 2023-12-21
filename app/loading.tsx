import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CircularProgress label="Loading..." />
    </div>
  );
}

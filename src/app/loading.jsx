import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="text-[#FF653F]" />
    </div>
  );
};

export default loading;

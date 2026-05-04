"use client";

import { ToastContainer, Zoom } from "react-toastify";

const ToastProvider = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        transition={Zoom}
        hideProgressBar
        autoClose={1500}
      />
    </div>
  );
};

export default ToastProvider;

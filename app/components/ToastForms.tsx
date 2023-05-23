import React from "react";
import { ToastTypes } from "@/types/generalTypes";

const ToastForms: React.FC<ToastTypes> = ({ type, message }) => {
    // alert-warning
    // alert-success
    // alert-danger 
    // alert-info

  return (
    <div className="toast-center toast">
      <div className="alert ">
        <div>
          <span>New mail arrived.</span>
        </div>
      </div>
      <div className="alert alert-success">
        <div>
          <span>Message sent successfully.</span>
        </div>
      </div>
    </div>
  );
};

export default ToastForms;

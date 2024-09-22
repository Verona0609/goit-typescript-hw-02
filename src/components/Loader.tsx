import { BallTriangle } from "react-loader-spinner";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

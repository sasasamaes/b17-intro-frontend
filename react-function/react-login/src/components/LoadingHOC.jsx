import React from "react";

const LoadingHOC = (Componente) => {
  return ({ isLoading, ...props }) => {
    if (!isLoading) return <Componente {...props} />;

    return <p>Cargando informacion⭕️👀</p>;
  };
};

export default LoadingHOC;

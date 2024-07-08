export const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    if (!props.isAuthenticated) {
      return <h1>Não autorizado.</h1>;
    }
    return <WrappedComponent {...props} />;
  };
  return WithAuthentication;
};

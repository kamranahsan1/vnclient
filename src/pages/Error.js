import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <h3>Ohh! Error not found!</h3>
        <p>we cant seem to find the page you are looking for.</p>
        <Link to="/">Go To Home</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Errors Page</h1>
      <br />
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Error;

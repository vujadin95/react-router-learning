import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde,
        maiores iure eum tempora perferendis modi illum rerum laborum cumque!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
export default NotFound;

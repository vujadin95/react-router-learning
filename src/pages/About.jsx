import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
        necessitatibus similique explicabo! Dolores voluptatibus optio quasi.
        Esse exercitationem rem dolorem aliquam tenetur, nesciunt perspiciatis,
        veritatis cum incidunt possimus voluptatibus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
        necessitatibus similique explicabo! Dolores voluptatibus optio quasi.
        Esse exercitationem rem dolorem aliquam tenetur, nesciunt perspiciatis,
        veritatis cum incidunt possimus voluptatibus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
        necessitatibus similique explicabo! Dolores voluptatibus optio quasi.
        Esse exercitationem rem dolorem aliquam tenetur, nesciunt perspiciatis,
        veritatis cum incidunt possimus voluptatibus!
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
export default About;

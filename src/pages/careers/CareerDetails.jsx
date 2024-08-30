import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const careeer = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {careeer.title}</h2>
      <p>Starting salary: {careeer.salary}</p>
      <p>Location: {careeer.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          deserunt autem vero, ducimus officiis atque consequuntur sunt quidem
          magnam illo.
        </p>
      </div>
    </div>
  );
};
export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if (!res.ok) {
    throw Error("Could not find that career!");
  }
  return res.json();
};

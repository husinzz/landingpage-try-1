import darekModel from "../img/assets/Darek.png";
import "./conten.css";

export default function Content() {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-block my-auto">
        <h1 className="heading-header">We are the future of Communication</h1>
        <p className="heading-title">
          With masive improvements in communication technology, we have created
          cheaper, faster and Better way to communicate with ligths.
        </p>
        <button type="button" class="btn btn-warning float-end">
          Learn More
        </button>
      </div>
      <img
        src={darekModel}
        height="466"
        alt="Darek with his mighty flashlight and hard hat"
        className=""
      />
    </div>
  );
}

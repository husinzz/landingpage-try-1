import darek2 from "../img/assets/Darek 2.png";
import laptop from "../img/assets/Darek with his laptop.png";
import builder from "../img/assets/Darek the builder.png";

import "./product.css";

export default function Products() {
  const data = [
    {
      image: darek2,
      title: "Light Communication",
      desc: "Our hard working crows are inovative when they are fed",
    },
    {
      image: laptop,
      title: "Crow Compute",
      desc: "Our crow will do anything for food, they even do math",
    },
    {
      image: builder,
      title: "Clay Tree",
      desc: "Our hard working crows are up for the job, safe and secure",
    },
  ];

  return (
    <div>
      <h1 className="text-center">What we do</h1>
      <div className="row w-100 mt-3">
        {data.map((current) => {
          return (
            <Card
              image={current.image}
              title={current.title}
              desc={current.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div class="col-xs-12 col-md-6 col-lg-4">
      <img
        class="cardwork_thumbnail mx-auto d-block"
        height="262"
        src={props.image}
        alt="#"
      />
      <div class="cardwork-meta cardwork-meta_shadows mx-auto">
        <h5 class="cardwork-title ps-1">{props.title}</h5>
        <div class="d-flex justify-content-between align-items-center">
          <p class="cardwork-desc cardwork_spacing">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

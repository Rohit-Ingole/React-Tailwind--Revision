import egg1 from "../images/egg-1.jpg";
import egg2 from "../images/egg-2.jpg";
import egg3 from "../images/egg-3.jpg";

const Content = () => {
  const Items = [
    {
      img: egg1,
      title: "Egg Muffins",
      desc: "Cripsy, delicious, and nutritious",
      cost: 16,
      color: "bg-green-300",
    },
    {
      img: egg2,
      title: "Egg Salad",
      desc: "Green, leaffy and fiber",
      cost: 18,
      color: "bg-yellow-300",
    },
    {
      img: egg3,
      title: "Egg Veggy",
      desc: "Cherry, green, and nutritious",
      cost: 20,
      color: "bg-pink-300",
    },
  ];

  return (
    <>
      {Items.map(({ img, title, desc, cost, color }, index) => (
        <div
          className={`flex flex-col justify-center items-center bg-white h-screen font-mono py-20 ${color}`}
          key={index}
        >
          <img src={img} alt="egg1" className="h-full rounded mb-20 shadow" />
          <div className="cardContent">
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className="mb-2">{desc}</p>
            <span>${cost}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;

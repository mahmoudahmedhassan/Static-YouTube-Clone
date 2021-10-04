import { React } from "react";
import Carousel from "react-elastic-carousel";

function Catgoery() {
  const data ={
    items: [
      { id: 1, title: "all" },
      { id: 2, title: "Javascript" },
      { id: 3, title: "Css" },
      { id: 4, title: "html" },
      { id: 5, title: "React js" },
      { id: 6, title: "Angular js" },
      { id: 7, title: "vue js" },
      { id: 8, title: "jQuery" },
      { id: 9, title: "برمج Barmej" },
      { id: 10, title: "Football" },
      { id: 11, title: "Call Of Duty" },
      { id: 12, title: "Gaming 3rbe" },
      { id: 13, title: "Unique Coderz Academy" },
      { id: 14, title: "قران" },
      { id: 15, title: "Elzero Web School" },
      { id: 16, title: "امير منير" },
      { id: 17, title: "Gaming" },
      { id: 18, title: "Droos Online" },
      { id: 19, title: " Pubg" },
    ],
  }

  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 400, itemsToShow: 2},
    { width: 550, itemsToShow: 3},
    { width: 768, itemsToShow: 8 },
    { width: 1200, itemsToShow: 12 }
  ];

  return (
    <div className="Catgoery">
      <Carousel itemsToShow={8} breakPoints={breakPoints}>
        {data.items.map((item) => (
          <div className='catgoery-item'
            key={item.id}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "20px",
              textAlign: "center",
              width: "150px",
              marginLeft: "10px",
            }}
          >
            {item.title}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Catgoery;

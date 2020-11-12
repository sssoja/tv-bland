interface Show {
  name: string;
  description: string;
  image: string;
}

const show: Show = {
  name: "soms",
  description: "soms",
  image: "image.png",
};

const ShowList = () => {
  return (
    <div>
      <p>show list</p>
      <p>{show.name}</p>
    </div>
  );
};

export default ShowList;

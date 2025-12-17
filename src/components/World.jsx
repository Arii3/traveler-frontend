function World(props) {
  function selectWorld(id) {
    console.log("select world: " + id);
  }

  function getUwpDetails() {
    fetchUwpDetails();
  }

  const fetchUwpDetails = async () => {
    console.log(props.uwp);
    try {
      const data = await getUwpDetails(props.uwp);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch uwp details", error);
    }
  };

  return (
    <div className="world">
      <h1>{props.name}</h1>
      <p>{props.sector}</p>
      <p>{props.uwp}</p>
      <button
        onClick={() => {
          selectWorld(props.index);
        }}
      >
        Select
      </button>
      <button
        onClick={() => {
          getUwpDetails(props.index);
        }}
      >
        Details
      </button>
    </div>
  );
}

export default World;

const RenderRecos = (props) => {
  const recos = props.recos.records;
  console.log(recos);
  return (
    <div className="cards-container">
      {recos.map((reco) => (
        <div className="card-container">
          <div className="card" key={reco.id}>
            <h5 className="reco-name">{reco.fields.Name}</h5>
            <p className="reco-text">{reco.fields.recommendation}</p>
            <img className="reco-img" src={reco.fields.picture[0].url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderRecos;

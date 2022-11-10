const Loading = () => {
  return (
    <div className="loader">
      <input className="loader-input" type="checkbox" id="check" />
      <label htmlFor="check">
        <div className="check-icon"></div>
      </label>
    </div>
  );
};

export default Loading;

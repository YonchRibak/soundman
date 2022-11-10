import RenderRecos from "./RenderRecos";
import useFetch from "./useFetch";
import Loading from "./Loading";
const Recommendations = () => {
  const {
    data: recos,
    isPending,
    error,
  } = useFetch(
    "https://api.airtable.com/v0/appKtFQl50iN8fIy7/recommendations?api_key=keyrLBP7eOuED5fyV"
  );
  return (
    <div>
      {error && <div> {error}</div>}
      {isPending && <Loading />}
      {recos && <RenderRecos recos={recos} />}
    </div>
  );
};

export default Recommendations;

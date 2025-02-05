import ClipLoader from "react-spinners/ClipLoader";

const override: React.CSSProperties = {
  display: "block",
  margin: "100px auto",
};

const Spinner: React.FC<{ loading?: boolean }> = ({ loading=true }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

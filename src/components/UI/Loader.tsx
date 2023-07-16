import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="min-h-70vh flex justify-center pt-16">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        visible={true}
      />
    </div>
  );
}

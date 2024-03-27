import spinner from "@/assets/icons/spinner.svg";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <img
        src={spinner}
        alt="spinner"
        width={40}
        height={40}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;

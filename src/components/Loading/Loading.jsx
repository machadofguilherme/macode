import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <ClockLoader
        color="#1E5128"
        size={80}
      />
      
      <h1
        className="text-xl font-medium text-lime-950 lowercase pb-40"
      >
        Carregando...
      </h1>
    </section>
  )
}

export default Loading;
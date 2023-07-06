import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-screen h-screen max-sm:w-full"
    >
      <BarLoader
        color="#1E5128"
        size={50}
      />
      
      <h1
        className="text-xl font-semibold text-lime-950 lowercase"
      >
        Carregando...
      </h1>
    </section>
  )
}

export default Loading;
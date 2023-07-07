import { ClockLoader } from "react-spinners";

const Loading = () => {
  const dark = localStorage.getItem('dark');

  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <ClockLoader
        color={dark === 'inactive' ? "#1E5128" : "#fafaf9"}
        size={80}
      />
      
      <h1
        className="text-xl font-medium text-lime-950 dark:text-stone-50 lowercase pb-40"
      >
        Carregando...
      </h1>
    </section>
  )
}

export default Loading;
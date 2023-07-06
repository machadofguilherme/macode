const Footer = () => {
  return (
    <footer
      className="w-screen h-12 bg-lime-950 sticky bottom-0 max-sm:h-full"
    >
      <section className="flex justify-around items-center max-sm:justify-evenly">
        <h3
          className="text-stone-50 font-medium text-sm pt-2 pb-2"
        >
          {'{ macode }'}
        </h3>

        <div className="flex flex-col justify-center pt-2">
          <p className="text-stone-50 max-sm:hidden">
            Desenvolvedor Web Fullstack formado pela
            <strong
              className="font-semibold text-lime-500 text-md pl-1"
            >
              Trybe
            </strong>
          </p>

          <p
            className="text-stone-50 pb-2 text-right max-sm:text-center"
          >
            Feito com muito 💚
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
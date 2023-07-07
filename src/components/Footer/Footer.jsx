const Footer = () => {
  return (
    <footer
      className="w-screen h-12 bg-lime-950 fixed bottom-0 max-sm:h-12"
    >
      <section className="flex justify-around items-center max-sm:justify-evenly">
        <h3
          className="text-stone-50 font-medium text-sm pt-3"
        >
          {'{ macode }'}
        </h3>

        <div className="flex flex-col justify-center pt-2">
          <span className="text-stone-50 max-sm:hidden">
            Desenvolvedor Web Fullstack formado pela
            <strong
              className="font-semibold text-lime-500 text-md pl-1"
            >
              Trybe
            </strong>
          </span>

          <span
            className="text-stone-50 text-right max-sm:text-center"
          >
            Feito com muito 💚
          </span>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
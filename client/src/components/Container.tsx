interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <section className="max-w-5xl mx-auto md:px-10 px-3">
        {children}
    </section>
  )
}

export default Container
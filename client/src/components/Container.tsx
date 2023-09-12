interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <section className="max-w-5xl mx-auto px-10">
        {children}
    </section>
  )
}

export default Container
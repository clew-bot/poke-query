import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="w-full h-24 bg-gradient-to-r from-purple-700 text-white mt-10 text-center pt-7">
        Made with 💜 by <Link to="https://github.com/clew-bot">clew-bot</Link>
    </footer>
  )
}

export default Footer
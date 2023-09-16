interface SkillMeterProps {
    stat: number
    name: string
}



const SkillMeter = ({ stat, name } :SkillMeterProps) => {
  return (
    <p className="capitalize font-bold">
    {name}: <span className="font-light">{stat} {`${ stat < 70 ? "😞" : stat < 130 ? "👌" : "💫" }`}</span>
    <meter
      className={`${ stat < 70 ? "bad" : stat < 130 ? "okay" : "great" } }`}
      min={0}
      max={255}
      value={stat}
    ></meter>
  </p>
  )
}

export default SkillMeter
interface SkillMeterProps {
    stat: number
    name: string
}

const SkillMeter = ({ stat, name } :SkillMeterProps) => {
  return (
    <p className="capitalize font-bold">
    {name}: <span className="font-light">{stat} </span>
    <meter
      min={0}
      max={255}
      low={45}
      high={130}
      optimum={130}
      value={stat}
    ></meter>
  </p>
  )
}

export default SkillMeter
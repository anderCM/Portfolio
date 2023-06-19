const FieldCard = ({ icon, title, description }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBot">
      <span className="text-4xl text-designColor mb-2">
        {icon}
      </span>
      <h2 className="text-center font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">
        {description}
      </p>
    </div>
  )
}

export default FieldCard
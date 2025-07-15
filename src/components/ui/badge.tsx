
const Badge = ({ skill }: { skill: string }) => {
  return (
    <span className="px-3 py-1 rounded-full w-fit bg-primary/20 border border-dashed hover:border-[#C75305] transition-all duration-300">
      {skill}
    </span>
  )
}

export default Badge
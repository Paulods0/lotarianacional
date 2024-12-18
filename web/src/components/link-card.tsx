import { Link } from "react-router-dom"

type Props = {
  item: {
    id: number
    link: string
    icon: string
    text: string[]
  }
}

const LinkCard = ({ item: { icon, link, text } }: Props) => {
  return (
    <Link
      to={link}
      reloadDocument
      className="flex w-full h-full flex-col gap-2 items-center"
    >
      <div className="radialGradient w-full h-[180px] lg:h-[230px] rounded-3xl flex items-center justify-center">
        <img
          src={icon}
          className="lg:h-[147px] h-[110px] w-full object-contain"
          alt=""
        />
      </div>

      <header className="font-bold text-LT_BLACK uppercase flex flex-col gap-0 mt-3 text-[26px] lg:text-[28px] text-center">
        <h4>{text[0]}</h4>
        <h4>{text[1]}</h4>
      </header>
    </Link>
  )
}

export default LinkCard

import { capitalizer } from "@/libs/capitalizer"
import { CSSProperties } from "react"

type Props = {
  icon: JSX.Element,
  text: string,
}

export default function BtnWIcon({ icon, text }: Props) {
  return (
    <button className="df g04 aic fw6 fs08 c-p h-c-b_p teio cp" style={btn} type="button">
      <span>{icon}</span>
      {capitalizer(text)}
    </button>
  )
};

const btn: CSSProperties = {
  marginLeft: "1rem"
}
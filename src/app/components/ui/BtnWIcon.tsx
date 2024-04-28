import { capitalizer } from "@/libs/capitalizer"

type Props = {
  icon: JSX.Element,
  text: string,
}

export default function BtnWIcon({ icon, text }: Props) {
  return (
    <button className="df g04 aic fw6 fs08 c-p h-c-b_p teio cp" type="button">
      <span>{icon}</span>
      {capitalizer(text)}
    </button>
  )
};

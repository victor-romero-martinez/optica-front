import { title } from '@/locales/es-ES/home/popular.json';
import data from '@/locales/es-ES/mockCard.json';
import Card from "../../ui/Card";
import Section from "../../ui/Section";
import './popular.css';

const newData = data.slice(0, 8);
const lastItem = newData.length - 1;

export default function Popular() {
  return (
    <Section title={title} id='popular'>
      <div className="grid-container">
        {
          newData.map((d, idx) => (
            <div key={idx} className="df jcc aic">
              <Card data={d} shadow background />
            </div>
          ))
        }
      </div>
    </Section>
  )
};
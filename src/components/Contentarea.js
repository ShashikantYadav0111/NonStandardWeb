import "./Component.css"
import Card from "./Cards.js";
import gojoimg from "../images/gojo2.jpg";
import Benimaru from "../images/benimaru.jpg";
import Diablo from "../images/diablo.jpg";
import reigen from "../images/reigen.jpg";
import karma from "../images/karma.jpg";
import kakashi from "../images/kakashi.jpg";


export default function Contentarea(props){
    return(
        <div className="contentarea">
          <div className='row'>
              <Card title="Satoro Gojo" animename='Jujutsu kaisen' charimg={gojoimg} quote="It'll be fine.I am the strongest there is,After all" />

              <Card title="Diablo" animename='Tensei Shitara Suraimu Datta Ken' charimg={Diablo} quote='i have been away from living world too long,I shall enjoy my time time here to the fullest' />

              <Card title="Benimaru Shinemon" animename='fire Force' charimg={Benimaru} quote='Anger begets anger.If you turn your bloodlust on someone,that bloodlust is guaranteed to come right back at you.' />
          </div>
          <br/>
          <div className='row'>
              <Card title="Karma Akabane" animename='The Assassination Classroom' charimg={karma} quote="IF you're going to fight, you have to shoot first and ask question later." />

              <Card title="Kakashi Hatake" animename='Naruto' charimg={kakashi} quote="This place makes me think about the mistakes I've made in the past... and I've made a lot." />

              <Card title="Reigen Arataka" animename='Mob Pyscho 100' charimg={reigen} quote="When things Go south,It's Ok to run away." />
              
          </div>
      </div>
    )
}

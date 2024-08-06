import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import imageSahil from '../../assets/IMG_0278.png';
export default function IntroductionSection() {
  return (
    <div className="flex flex-col items-center mx-16 my-36 gap-36">
        <div className="flex bg-white w-full rounded-lg items-center justify-center">
            <div className="flex flex-col font-normal text-black text-lg py-48 w-1/3 items-center">
            <p>Before all this, I was Head of Product at Spaceship, product design intern at Palantir in Palo Alto and a bunch of other roles you can read about here.
            </p>
            <br/>
<p>In 2016, I graduated from the University of Technology, Sydney with two Bachelors degrees. During this time, I created a product for job seekers called Presumi that I ended up licensing to SEEK in Hong Kong.</p>
<br/>
<p>In my spare time, I enjoy mentoring entrepreneurs, advising startups, going to the gym, learning guitar, speaking at events, curating Spotify playlists, playing video games, making apps and learning new things.</p>
            </div>
        </div>
    </div>
  );
}

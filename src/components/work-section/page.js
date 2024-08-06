import Image from "next/image";
import { inter, abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import WorkCard from "../word-card/page";
import HeroImage from '../../assets/hero.png';
export default function WorkSection() {
  return (
    <div className="mx-16 grid grid-cols-2 gap-x-14 gap-y-48 items-center">
      <WorkCard side={'right'} imgSrc={HeroImage.src} heading={"Neutral"} caption={"After hours, I work on an app for combating climate change through reforestation programs. We ask you a few key questions about your lifestyle, spending and utility bills, then combine this information with country averages and formulas from the U.S. EPA to calculate a score that measures how sustainable you live."} linkText={"Download Neutral"} color={"#068466"}/>
      <WorkCard side={'left'} imgSrc={HeroImage.src} heading={"Tomorrow"} caption={
        "I’m also half of a tiny product incubator for delightful products. Our first product is Bokeh — an intelligent portfolio platform for professional photographers. We just launched, but if you join the mailing list, we’ll keep you in the loop."} linkText={"Join the mailing list"} color={"#5F49E3"}/>
      <WorkCard side={'right'} imgSrc={HeroImage.src} heading={"Neutral"} caption={"After hours, I work on an app for combating climate change through reforestation programs. We ask you a few key questions about your lifestyle, spending and utility bills, then combine this information with country averages and formulas from the U.S. EPA to calculate a score that measures how sustainable you live."} linkText={"Download Neutral"} color={"#068466"}/>
      <WorkCard side={'left'} imgSrc={HeroImage.src} heading={"Neutral"} caption={"After hours, I work on an app for combating climate change through reforestation programs. We ask you a few key questions about your lifestyle, spending and utility bills, then combine this information with country averages and formulas from the U.S. EPA to calculate a score that measures how sustainable you live."} linkText={"Download Neutral"} color={"#068466"}/>
      <WorkCard side={'right'} imgSrc={HeroImage.src} heading={"Neutral"} caption={"After hours, I work on an app for combating climate change through reforestation programs. We ask you a few key questions about your lifestyle, spending and utility bills, then combine this information with country averages and formulas from the U.S. EPA to calculate a score that measures how sustainable you live."} linkText={"Download Neutral"} color={"#068466"}/>
    
    </div>
  );
}

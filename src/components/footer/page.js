import DribbbleIcon from "@/assets/dribbble";
import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedInIcon from "@/assets/linkedin";
import MailIcon from "@/assets/mail";
import SpotifyIcon from "@/assets/spotify";
import TwitterIcon from "@/assets/twitter";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center border-t border-gray-200 pt-12 pb-8 bg-white mt-24">
            <div className="flex flex-row gap-6 mb-6">
                <a href="https://x.com/sahilsilare" target="_blank" rel="noopener noreferrer"><TwitterIcon width="22" height="22" currentColor="#222"/></a>
                <a href="https://instagram.com/sahilsilare" target="_blank" rel="noopener noreferrer"><InstagramIcon width="22" height="22" currentColor="#222"/></a>
                <a href="https://github.com/sahil9001" target="_blank" rel="noopener noreferrer"><GithubIcon width="22" height="22" currentColor="#222"/></a>
                <a href="https://linkedin.com/in/sahil-silare" target="_blank" rel="noopener noreferrer"><LinkedInIcon width="22" height="22" currentColor="#222"/></a>
            </div>
            <div className="text-gray-500 text-sm tracking-wide">© Sahil Silare 2024</div>
        </footer>
    )
}
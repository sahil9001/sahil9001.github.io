import DribbbleIcon from "@/assets/dribbble";
import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedInIcon from "@/assets/linkedin";
import MailIcon from "@/assets/mail";
import SpotifyIcon from "@/assets/spotify";
import TwitterIcon from "@/assets/twitter";

export default function Footer() {
    return (
        <div className="flex flex-col gap-48 items-center mb-48">
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-row gap-8">
                <a href="https://x.com/sahilsilare" target="_blank"><TwitterIcon width="16" height="16"/></a>
                <a href="https://instagram.com/sahilsilare" target="_blank"><InstagramIcon width="16" height="16"/></a>
                <a href="https://github.com/sahil9001" target="_blank"><GithubIcon width="16" height="16"/></a>
                <a href="https://linkedin.com/in/sahil-silare" target="_blank"><LinkedInIcon width="16" height="16"/></a>
                </div>
                <div className="text-slate-700 text-sm">© Sahil Silare 2024</div>
            </div>
        </div>
    )
}
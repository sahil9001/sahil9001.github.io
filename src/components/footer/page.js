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
            <div className="flex flex-col gap-12 items-center w-1/4">
                <div className="text-black"><MailIcon width="20" height="20"/></div>
                <div className="text-black text-lg text-center">Join my private mailing list and get notified when I publish a new product or article.</div>
                <div className="text-black">sahilsilare@gmail.com</div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-row gap-8">
                <SpotifyIcon width="16" height="16"/>
                <TwitterIcon width="16" height="16"/>
                <DribbbleIcon width="16" height="16"/>
                <InstagramIcon width="16" height="16"/>
                <GithubIcon width="16" height="16"/>
                <LinkedInIcon width="16" height="16"/>
                </div>
                <div className="text-slate-700 text-sm">© Sahil Silare 2024</div>
            </div>
        </div>
    )
}
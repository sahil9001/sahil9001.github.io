import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedInIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 bg-transparent mt-24">
      <div className="flex flex-row gap-6 mb-6">
        <a href="https://x.com/sahilsilare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <TwitterIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://instagram.com/sahilsilare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <InstagramIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://github.com/sahil9001" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <GithubIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://linkedin.com/in/sahil-silare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <LinkedInIcon width="22" height="22" currentColor="currentColor" />
        </a>
      </div>
      <div className="text-gray-500 dark:text-gray-500 text-sm tracking-wide">© Sahil Silare 2024</div>
    </footer>
  );
}

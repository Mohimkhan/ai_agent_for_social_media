import { appName, socialMediaHandle, socialProfileUrl } from "@/constants";
import { LinkPreview } from "../ui/link-preview";

const Footer = () => {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-2/4 cursor-pointer dark:bg-transparent dark:text-white text-black font-semibold tracking-wider text-xs md:text-[16px]">
      <div>
        <span>
          {`© ${new Date().getFullYear()} ${appName}. All rights reserved and build with ❤️ by`}
          {""}
        </span>
        <LinkPreview
          url={socialProfileUrl}
          isStatic={true}
          imageSrc="/images/fb_me.png"
        >
          <span className="ml-1">{socialMediaHandle}</span>
        </LinkPreview>
      </div>
    </div>
  );
};
export default Footer;

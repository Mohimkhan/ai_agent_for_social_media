import { appName, socialMediaHandle, socialProfileUrl } from "@/constants";
import { LinkPreview } from "../ui/link-preview";

const Footer = () => {
  return (
    <div className="grid place-content-center cursor-pointer dark:bg-transparent dark:text-white text-black font-semibold tracking-wider text-xs md:text-[16px] w-full">
      <div className="flex justify-center items-center flex-col gap-1 w-full md:block">
        <span className="text-[9px] md:text-[16px]">
          {`© ${new Date().getFullYear()} ${appName}. All rights reserved and build with ❤️ by`}
          {""}
        </span>
        <LinkPreview
          url={socialProfileUrl}
          isStatic={true}
          imageSrc="/images/fb_me.png"
        >
          <span className="ml-1 text-2xl md:text-[16px]">
            {socialMediaHandle}
          </span>
        </LinkPreview>
      </div>
    </div>
  );
};
export default Footer;

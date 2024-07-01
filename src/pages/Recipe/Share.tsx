import { Section } from "../../components";
import React from "react";
import { PiShareNetworkBold } from "react-icons/pi";
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, XIcon } from "react-share";

export default React.memo(() => {
  return (
    <Section
    icon={<PiShareNetworkBold size={20} />}
    title="Share Recipe"
    subtitle="Share recipe with your friends and family"
  >
    <div className="flex flex-row gap-5">
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TelegramShareButton url={window.location.href}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <TwitterShareButton url={window.location.href}>
        <XIcon size={32} round />
      </TwitterShareButton>
    </div>
  </Section>
  );
});

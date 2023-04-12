import { Icon } from "@ivanhadziilicupg/upg-community-design-system";
import { UpLogoShape } from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const BackgroundImage = ({ color }) => {
  return (
    <div className="bcg-img-logo">
      <Icon icon={UpLogoShape} color={color} />
      {/* <img src="https://register.banqup.rs/images/icon.svg" /> */}
    </div>
  );
};

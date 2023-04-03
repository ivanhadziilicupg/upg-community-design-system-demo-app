import { Icon } from "@ivanhadziilicupg/upg-community-design-system";
import {
  UpLogoShape,
  UpLogoName,
} from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const BackgroundImage = ({ color }) => {
  return (
    <div className="bcg-img-logo">
      {/* <img src="https://register.banqup.rs/images/icon.svg" /> */}
      <Icon icon={UpLogoShape} color={color} />
    </div>
  );
};

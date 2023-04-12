import { Icon } from "@ivanhadziilicupg/upg-community-design-system";
import {
  UpLogoShape,
  UpLogoName,
} from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const Logo = ({ color }) => {
  return (
    <a href="" className="logo">
      <Icon icon={UpLogoShape} color={color} position="left" />
      <i className="upg">
        <UpLogoName color={color} />
      </i>
    </a>
  );
};

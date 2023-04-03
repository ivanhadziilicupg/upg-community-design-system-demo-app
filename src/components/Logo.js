import { Icon } from "@ivanhadziilicupg/upg-community-design-system";
import {
  UpLogoShape,
  UpLogoName,
} from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const Logo = ({ color, ...props }) => {
  return (
    <a href="/" className={"logo"}>
      <Icon icon={UpLogoShape} color={color} size="lg" position="left" />
      <UpLogoName
        color={color}
        style={{
          fontSize: 100,
          height: 26,
        }}
      />
    </a>
  );
};

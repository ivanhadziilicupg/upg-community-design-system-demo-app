import {
  colors,
  Button,
  Icon,
} from "@ivanhadziilicupg/upg-community-design-system";
import { UpLogoShape } from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const MyIdButton = ({ ...props }) => (
  <Button
    className="myid-idp"
    color="secondary"
    variant="outline"
    type="button"
    {...props}
  >
    <Icon icon={UpLogoShape} color={colors.brand1_500} position="left" />
    Banqup ID - MyID (uat)
  </Button>
);

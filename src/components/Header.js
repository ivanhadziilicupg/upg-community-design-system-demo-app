import {
  colors,
  FieldInline,
  Label,
  Icon,
  Switch,
} from "@ivanhadziilicupg/upg-community-design-system";
import { ChevronDownMedium } from "@ivanhadziilicupg/upg-community-design-system/lib/icons";
import { Gb } from "@ivanhadziilicupg/upg-community-design-system/lib/iso-country-flags";
import { Logo } from "./Logo";

export const Header = ({ theme, setTheme }) => (
  <header className="myid-login-form-header">
    <div>
      <Logo color={theme === "dark" ? colors.white : colors.brand1} />
      <div className="top-header-right">
        <div>
          <span className="myid-current-locale-subtitle">Theme</span>
          <div
            // href="javascript:void(0)"
            id="kc-current-locale-link"
            className="myid-current-locale"
          >
            <FieldInline className="myid-current-locale-label">
              <Switch
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              <Label size="base">{theme === "light" ? "Light" : "Dark"}</Label>
            </FieldInline>
          </div>
        </div>
        <div className="kc-dropdown">
          <span className="myid-current-locale-subtitle">Language</span>
          <a
            // href="javascript:void(0)"
            id="kc-current-locale-link"
            className="myid-current-locale"
          >
            <span className="myid-current-locale-label">
              <Icon
                icon={Gb}
                position="left"
                // size="md"
              />
              English
              <Icon icon={ChevronDownMedium} position="right" />
            </span>
          </a>
          <ul className="myid-supported-locales">
            <div className="support-language-list">
              <li className="kc-dropdown-item selected">
                <a href="">English</a>
              </li>
              <li className="kc-dropdown-item">
                <a href="">Srpski</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

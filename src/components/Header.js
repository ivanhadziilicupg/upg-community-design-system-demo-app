import {
  colors,
  Icon,
  Switch,
} from "@ivanhadziilicupg/upg-community-design-system";
import { ChevronDownMedium } from "@ivanhadziilicupg/upg-community-design-system/lib/icons";
import { Gb } from "@ivanhadziilicupg/upg-community-design-system/lib/iso-country-flags";
import { Logo } from "./Logo";

export const Header = ({ theme, setTheme, color }) => (
  <header className="myid-login-form-header">
    <div>
      <Logo color={theme === "dark" ? colors.white : colors.brand1} />
      <div className="top-header-right">
        <div>
          <span className="myid-current-locale-subtitle">Theme</span>
          <a
            href="javascript:void(0)"
            id="kc-current-locale-link"
            className="myid-current-locale"
          >
            <span
              className="myid-current-locale-label"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Switch checked={theme === "dark"} />
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </a>
        </div>
        <div className="kc-dropdown">
          <span className="myid-current-locale-subtitle">Language</span>
          <a
            href="javascript:void(0)"
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
                <a href="javascript:void(0)">English</a>
              </li>
              <li className="kc-dropdown-item">
                <a href="javascript:void(0)">Srpski</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

// export const Header = ({ theme, setTheme, color }) => {
//   return (
//     <nav>
//       <Logo color={color} />
//       <Button
//         color="secondary"
//         width="intrinsic"
//         variant="text"
//         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       >
//         <Switch checked={theme === "dark"} />
//         Switch theme
//       </Button>
//       <Button
//         //
//         color="secondary"
//         width="intrinsic"
//         variant="text"
//       >
//         <Icon icon={Gb} position="left" />
//         Choose language
//         <Icon icon={ChevronDownMedium} position="right" />
//       </Button>
//     </nav>
//   );
// };

// import { Icon } from "@ivanhadziilicupg/upg-community-design-system";
// import {
//   UpLogoShape,
//   UpLogoName,
// } from "@ivanhadziilicupg/upg-community-design-system/lib/icons";

export const Footer = ({ color, ...props }) => {
  return (
    <div class="myid-disclaimer">
      {/* <div class="app-version">v.upg-1701.7.0</div> */}
      <span class="myid-disclaimerUpg">© unifiedpostgroup</span>
      <span class="myid-disclaimerUpg">Sva prava zadržana</span>
      <a
        href="https://www.unifiedpost.com/en/privacy-cookie-policy"
        target="_blank"
        class="myid-accent"
      >
        Izjava o privatnosti
      </a>
    </div>
  );
};

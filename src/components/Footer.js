export const Footer = ({ color, ...props }) => {
  return (
    <div className="myid-disclaimer">
      <span className="myid-disclaimerUpg">© unifiedpostgroup</span>
      <span className="myid-disclaimerUpg">Sva prava zadržana</span>
      <a
        href="https://www.unifiedpost.com/en/privacy-cookie-policy"
        target="_blank"
        className="myid-accent"
      >
        Izjava o privatnosti
      </a>
    </div>
  );
};

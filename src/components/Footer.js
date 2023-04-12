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
      <a
        href="https://636530efb574516e4a4a976e-yajyvtsgvu.chromatic.com/?path=/story/library-v0-0-0-getting-started--page"
        target="_blank"
        className="myid-accent"
      >
        Storybook
      </a>
    </div>
  );
};

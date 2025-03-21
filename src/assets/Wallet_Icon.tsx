// Icons are saved as function components for ease of use

interface Props {
  isActive?: boolean;
  onClick?: (...args: any[]) => any; // Accepts any function signature
}

const Wallet_Icon: React.FC<Props> = ({ isActive, onClick }) => (
  <svg
    className={`icon ${isActive ? "active" : ""}`}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3333 7.5H6.33333"
      stroke="#1D1E30"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.8334 9.14165V10.8584C18.8334 11.3167 18.4667 11.6917 18 11.7083H16.3667C15.4667 11.7083 14.6417 11.05 14.5667 10.15C14.5167 9.625 14.7167 9.13333 15.0667 8.79167C15.375 8.475 15.8 8.29169 16.2667 8.29169H18C18.4667 8.30835 18.8334 8.68332 18.8334 9.14165Z"
      stroke="#1D1E30"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0667 8.79165C14.7167 9.13331 14.5167 9.62498 14.5667 10.15C14.6417 11.05 15.4667 11.7083 16.3667 11.7083H18V12.9167C18 15.4167 16.3333 17.0833 13.8333 17.0833H6.33334C3.83334 17.0833 2.16667 15.4167 2.16667 12.9167V7.08332C2.16667 4.81666 3.53334 3.23332 5.65834 2.96665C5.87501 2.93332 6.1 2.91666 6.33334 2.91666H13.8333C14.05 2.91666 14.2583 2.92498 14.4583 2.95831C16.6083 3.20831 18 4.79999 18 7.08332V8.29167H16.2667C15.8 8.29167 15.375 8.47498 15.0667 8.79165Z"
      stroke="#1D1E30"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Wallet_Icon;

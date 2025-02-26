// Icons are saved as function components for ease of use

interface Props {
  isActive?: boolean;
  onClick?: (...args: any[]) => any; // Accepts any function signature
}

const Profile_Icon: React.FC<Props> = ({ isActive, onClick }) => (
  <svg
    className={`icon ${isActive ? "active" : ""}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="#F1F3F9" />
    <path
      d="M12.0935 11.3408C12.0352 11.335 11.9652 11.335 11.901 11.3408C10.5127 11.2941 9.41016 10.1566 9.41016 8.75663C9.41016 7.32746 10.5652 6.16663 12.0002 6.16663C13.4293 6.16663 14.5902 7.32746 14.5902 8.75663C14.5843 10.1566 13.4818 11.2941 12.0935 11.3408Z"
      stroke="#5A5B71"
      stroke-width="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.17643 13.4934C7.76476 14.4384 7.76476 15.9784 9.17643 16.9175C10.7806 17.9909 13.4114 17.9909 15.0156 16.9175C16.4273 15.9725 16.4273 14.4325 15.0156 13.4934C13.4173 12.4259 10.7864 12.4259 9.17643 13.4934Z"
      stroke="#5A5B71"
      stroke-width="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Profile_Icon;

// Icons are saved as function components for ease of use

interface Props {
  className?: string;
  onClick?: (...args: any[]) => any; // Accepts any function signature
}

const Edit_Icon: React.FC<Props> = ({ className, onClick }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={`stroke-current ${className}`} // Enables Tailwind styling
  >
    <path
      d="M21.1739 6.812C21.7026 6.28342 21.9997 5.56647 21.9998 4.81885C21.9999 4.07124 21.703 3.35421 21.1744 2.8255C20.6459 2.29679 19.9289 1.99971 19.1813 1.99962C18.4337 1.99952 17.7166 2.29642 17.1879 2.825L3.84193 16.174C3.60975 16.4055 3.43805 16.6905 3.34193 17.004L2.02093 21.356C1.99509 21.4425 1.99314 21.5343 2.01529 21.6219C2.03743 21.7094 2.08285 21.7892 2.14673 21.853C2.21061 21.9168 2.29055 21.9621 2.37809 21.9841C2.46563 22.0061 2.55749 22.004 2.64393 21.978L6.99693 20.658C7.3101 20.5628 7.59511 20.3921 7.82693 20.161L21.1739 6.812Z"
      stroke="#333B4F"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 5L19 9"
      stroke="#333B4F"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Edit_Icon;

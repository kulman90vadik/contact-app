import styles from "./header.module.scss";
import "../../scss/global.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.btn}>
            Code
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                stroke="#394867"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                stroke="#394867"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                stroke="#394867"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <span className={styles.title}>Contacts</span>
          <button className={styles.btn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.275 19.25C15 19.025 18.75 15.125 18.75 10.325C17.625 12.5 15.375 14 12.75 14C9 14 6 11 6 7.25C6 4.625 7.5 2.375 9.675 1.25C4.725 1.325 0.75 5.3 0.75 10.25C0.75 11.45 0.975 12.575 1.425 13.625"
                stroke="#394867"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Dark Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

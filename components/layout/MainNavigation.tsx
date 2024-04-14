import Link from "next/link";
import classes from "./MainNavigation.module.css";

import AddIcon from "@mui/icons-material/Add";

const MainNavigation = (): React.ReactElement => {
  return (
    <header className={classes.header}>
      <div
        style={{
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          margin: "0 auto",
        }}
      >
        Book Store
      </div>
      <nav>
        <ul>
          <li>
            <Link
              style={{ color: "white", alignItems: "center" }}
              href="/newBook"
            >
              <AddIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>
              <span className="tres">Tres</span>
              <span className="en">En</span>
              <span className="raya">Raya</span>
            </h1>
          </a>
        </Link>
      </div>

      <style jsx>{`
          header {
            background-color: #a8fdff;
            width: 100%;
            height: 80px;
          }
          .logo {
            width: 175px;
            padding: 20px 0 0 30px;
          }
          h1 {
            margin: 0;
          }
          .tres {
            color: #ff0000;
          }
          .en {
            color: #007408;
          }
          .raya {
            color: #7d157e;
          }
        `}
      </style>
    </header>
  );
};

export default Header;

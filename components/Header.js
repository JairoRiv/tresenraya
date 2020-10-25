import Link from "next/link";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="logo">
          <Link href="/">
            <a>
              <h1>TRESENRAYA</h1>
            </a>
          </Link>
        </div>

        <style jsx>{`
            header {
              background-color: #f7d913;
              width: 100%;
              height: 70px;
            }
            .logo {
              width: 100vW;
              padding: 20px 0 0 30px;
            }
            h1 {
              margin: 0;
              font-family: "Righteous", cursive;
              color: #061722;
              text-align: center;
            }
          `}
        </style>
      </header>
    </>
  );
};

export default Header;

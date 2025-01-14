import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "hooks/useTranslation";
import { LinkButton } from "components/LinkButton";
import HeaderLogo from "components/HeaderLogo";

const Home = () => {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{t.main_heading}</title>
      </Head>

      <main className="flex flex-1 justify-center items-center py-16 flex-col">
        <HeaderLogo />
        <h1 className="mt-8 text-5xl text-center">{t.main_heading}</h1>

        <div className="my-12">
          <p className="text-center">{t.main_description}</p>
          <p className="mt-6 text-center">{t.main_description2}</p>
        </div>

        <div className="flex flex-col items-center justify-center flex-wrap max-w-3xl">
          <Link href="/seek" passHref>
            <LinkButton text={t.seek_help} />
          </Link>
          <Link href="/give" passHref>
            <LinkButton text={t.give_help} />
          </Link>
        </div>
      </main>

      <footer className="flex py-8 justify-center items-center">
        <a
          href="https://github.com/PetroSilenius/assist-ukrainians#readme"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 underline"
        >
          {t.about}
        </a>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};

export default Home;

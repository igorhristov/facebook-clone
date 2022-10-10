import { useSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";

const Home = () => {
   const { data: session } = useSession()
  console.log('SESSION:', session);
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook clone</title>
      </Head>
      {/* header */}
      <Header />
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   // get user
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// }

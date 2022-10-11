import { useSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = () => {
   const { data: session } = useSession()
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook clone</title>
      </Head>
      {/* header */}
      <Header />
      <main className="flex">
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        <Feed/>
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

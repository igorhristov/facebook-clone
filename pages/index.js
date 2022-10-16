import { useSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const Home = () => {
  const { data: session } = useSession();
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
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   // get user
//   const posts = await db.collection('posts').get()

//   const docs = posts.docs.map(post=>({
//     id: post.id,
//     ...post.data(),
//     timestamp: null
//   }))

//   return {
//     props: {
//       posts:docs
//     },
//   };
// }

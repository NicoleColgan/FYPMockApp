import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

//if theres no session then go to the login page, otherwise go to the home page
export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />

      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </div>
  );
}

//add server side rendering for when theres no session - we want to get the session and give it to 
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
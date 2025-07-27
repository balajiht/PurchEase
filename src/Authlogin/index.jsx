import { Login } from "../Login";
import { Navbar } from "../components/Navbar";

export const Authlogin = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center">
        <Login />
      </main>
    </>
  );
};

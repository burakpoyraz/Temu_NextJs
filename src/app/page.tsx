import Image from "next/image";
import { getCurrentSession } from "@/actions/auth";

const  Home= async()=> {

  const { user } = await getCurrentSession();

  
  console.log(JSON.stringify(user));
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      </div>
  );
}

export default Home;



import { currentUser } from "@clerk/nextjs/server";
import Guest from "./components/Guest";

export default async function Home() {
 const user = await currentUser();
 console.log(user);
 
  return (
    
      !user ? <Guest /> : <div>hi</div>
    
  );
}

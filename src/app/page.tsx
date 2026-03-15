import Image from "next/image";
import axios from "axios"
export default async function Home() {
  const response = await fetch("http://localhost:3000/app/api/chat")
  const result = await response.json();

  return (
    <div>{result.message}</div>
  );
}

import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Index | Fast Food" },
    { name: "description", content: "Fast food restaurant (e-commerce) portfolio project. - Index page" },
  ];
};

export default function Index() {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center mx-auto my-20 font-bold md:text-6xl">Welcome to our restaurant!</h1>
      <ul className="flex justify-center items-center gap-10">
        <li>
          <Link to="/foods" className="bg-sky-800 text-white px-8 py-4 rounded">See our burgers</Link>
        </li>
        <li>
          <Link to="/auth/login" className="bg-sky-800 text-white px-8 py-4 rounded">Log In</Link>
        </li>
      </ul>
    </div>
  );
}

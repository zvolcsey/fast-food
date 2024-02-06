import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Log In | Fast Food" },
    { name: "description", content: "Fast food restaurant (e-commerce) portfolio project. - Log In page" },
  ];
};

export default function LogIn() {
  return (
    <p>Log In</p>
  )
}
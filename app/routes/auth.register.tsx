import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Register | Fast Food" },
    { name: "description", content: "Fast food restaurant (e-commerce) portfolio project. - Register page" },
  ];
};

export default function Register() {
  return (
    <p>Register</p>
  )
}
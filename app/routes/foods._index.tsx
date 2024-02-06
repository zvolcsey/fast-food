import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Foods | Fast Food" },
    { name: "description", content: "Fast food restaurant (e-commerce) portfolio project. - List of foods page" },
  ];
};

export default function Foods() {
  return (
    <p>Foods</p>
  )
}
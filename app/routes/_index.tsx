import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Fast Food Restaurant" },
    { name: "description", content: "Fast food restaurant (e-commerce) portfolio project." },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
    </div>
  );
}

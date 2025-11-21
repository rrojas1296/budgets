import type { Component } from "../../db/budgets";
import PCComponent from "../PCComponent";

interface Props {
  components?: Component[];
  total: number;
  currency?: string;
  title?: string;
  dollar: number | null;
}

const ComponentsSection = ({
  components,
  currency,
  title,
  total,
  dollar,
}: Props) => {
  return (
    <div className="mt-6 lg:mt-10">
      <div className="lg:flex justify-between">
        <h1 className="text-xl lg:text-2xl text-text-1 font-bold">{title}</h1>
        {components?.length && (
          <p className=" text-text-2 text-sm md:text-xl lg:text-2xl lg:text-text-1 font-bold">
            {currency}
            {dollar && (total * dollar).toFixed(2)}
          </p>
        )}
      </div>

      <section className="mt-4 lg:mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {components?.map((c, i) => {
          return <PCComponent key={i} component={c} dollar={dollar} />;
        })}
      </section>
    </div>
  );
};

export default ComponentsSection;

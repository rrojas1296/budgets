import type { Component } from "../db/budgets";
import Button from "./Button";

interface Props {
  component: Component;
}
const PCComponent = ({ component }: Props) => {
  const { title, photoUrl, urls, price, currency } = component;

  const openLinkHandler = (url: string) => window.open(url, "_blank");
  return (
    <div className="bg-bg-2 rounded-lg border border-border-card p-4 flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <img
          src={photoUrl}
          alt={title}
          className="w-imageUrl h-imageUrl rounded-lg"
        />
        <div>
          <h2 className="text-text-1 text-base font-medium leading-5">
            {title}
          </h2>
          <p className="text-text-2 text-sm font-medium mt-2">
            {currency}
            {price}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        {urls.map((url, i) => (
          <Button
            key={i}
            variant="ghost"
            className="bg-bg-1 w-full"
            onClick={() => openLinkHandler(url.link)}
          >
            {url.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PCComponent;

import { useTranslation } from "react-i18next";
import { budgets } from "./db/budgets";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import MoonIcon from "./components/Icon/MoonIcon";
import SunIcon from "./components/Icon/SunIcon";
import axios from "axios";
import { FASTFOREX_API_KEY } from "./config/environments";
import ComponentsSection from "./components/ComponentsSection/ComponentsSection";

function App() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [budgetIndex, setBudgetIndex] = useState(1);
  const budget = budgets.find((_, i) => i === budgetIndex);
  const [dollar, setDollar] = useState<null | number>(null);
  const peripheralsTotal =
    budget?.peripherals.reduce((sum, item) => sum + item.price, 0) || 0;
  const total =
    budget?.components.reduce((sum, item) => {
      return sum + item.price;
    }, 0) || 0;

  const getDataDollar = async () => {
    const params = new URL("https://api.fastforex.io/fetch-one");
    params.searchParams.set("from", "USD");
    params.searchParams.set("to", "PEN");
    const d = await axios.get(params.toString(), {
      headers: {
        "X-API-Key": FASTFOREX_API_KEY,
      },
    });
    setDollar(d.data.result.PEN as number);
  };

  useEffect(() => {
    getDataDollar();
  }, []);
  return (
    <div className="px-5 py-5 max-w-[1476px] m-auto lg:py-14">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-text-1 text-2xl lg:text-main-title font-semibold">
            {t("Budgets.title")}
          </h1>
          <p className="text-text-2 text-sm mt-2">{t("Budgets.subtitle")}</p>
        </div>
        <Button
          variant="ghost"
          className="hover:bg-bg-1 hover:text-text-1 shrink-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <MoonIcon className="w-5 h-5 text-text-1" />
          ) : (
            <SunIcon className="text-text-1 w-5 h-5" />
          )}
        </Button>
      </div>
      <div className="mt-6 lg:mt-12">
        <div className="overflow-x-auto">
          <div className="flex gap-5 py-2">
            {budgets.map((b, i) => (
              <Button
                key={i}
                className="whitespace-nowrap"
                variant={budget?.id === b.id ? "filled" : "ghost"}
                onClick={() => setBudgetIndex(i)}
              >
                {b.buttonLabel}
              </Button>
            ))}
          </div>
        </div>
        <ComponentsSection
          components={budget?.components}
          title={budget?.title}
          currency={budget?.currency}
          total={total}
          dollar={dollar}
        />
        <ComponentsSection
          components={budget?.peripherals}
          title={budget?.peripheralsTitle}
          currency={budget?.currency}
          total={peripheralsTotal}
          dollar={dollar}
        />
      </div>
    </div>
  );
}

export default App;

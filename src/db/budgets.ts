import { budget1440_5000 } from "./budget1140-5000";
import { budget1440_7500 } from "./budget1440-8000";

export interface Url {
  label: string;
  link: string;
}
export interface Component {
  title: string;
  price: number;
  currency: string;
  photoUrl: string;
  urls: Url[];
}
export interface Budget {
  buttonLabel: string;
  title: string;
  currency: string;
  id: string;
  peripheralsTitle: string;
  components: Component[];
  peripherals: Component[];
}

export const budgets: Budget[] = [budget1440_5000, budget1440_7500];

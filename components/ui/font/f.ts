import { Inter, Roboto, Nunito, Roboto_Slab } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const roboto_Slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

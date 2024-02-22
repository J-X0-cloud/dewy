import type { Metadata } from "next";
import { DownloadBand } from "@/components/sections/DownloadBand";
import { IngredientNotes } from "@/components/shelf/IngredientNotes";
import { LayeringOrder } from "@/components/shelf/LayeringOrder";
import { PairingTable } from "@/components/shelf/PairingTable";
import { ShelfHero } from "@/components/shelf/ShelfHero";
import { UseByList } from "@/components/shelf/UseByList";

export const metadata: Metadata = {
  title: "Dewy product shelf | Layering, pairing and use-by reminders",
  description:
    "Dewy's product shelf files what you own by routine step, suggests layering order, keeps common actives on sensible schedules and reminds you before products expire.",
};

export default function ShelfPage() {
  return (
    <>
      <ShelfHero />
      <LayeringOrder />
      <PairingTable />
      <UseByList />
      <IngredientNotes />
      <DownloadBand />
    </>
  );
}

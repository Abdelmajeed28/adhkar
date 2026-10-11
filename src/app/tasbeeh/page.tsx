import BackLink from "@/components/BackLink";
import TasbeehClient from "@/components/TasbeehClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المسبحة",
};
function page() {
  return (
    <main className="mx-auto max-w-3xl p-4">
      <BackLink />
      <h1 className="mb-4 text-2xl font-bold text-primary">المسبحة</h1>
      <TasbeehClient />
    </main>
  );
}

export default page;

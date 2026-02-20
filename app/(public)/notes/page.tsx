import { NotesPageContent } from "@/components/public/notes/notes-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Notes",
  description: "Technical findings, observations, and thoughts from the workbench. Arduino projects, Raspberry Pi experiments, and maker discoveries.",
};

export default function NotesPage() {
  return (
    <div className="pt-24">
      <NotesPageContent />
    </div>
  );
}

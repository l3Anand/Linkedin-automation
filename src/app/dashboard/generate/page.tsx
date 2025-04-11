import { Metadata } from "next";
import ContentGeneratorForm from "@/components/content/ContentGeneratorForm";

export const metadata: Metadata = {
  title: "Generate Content | LinkedIn Content Automation",
  description: "Generate AI-powered content for your LinkedIn posts",
};

export default function GenerateContentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Generate LinkedIn Content</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <ContentGeneratorForm />
        </div>
      </div>
    </div>
  );
} 
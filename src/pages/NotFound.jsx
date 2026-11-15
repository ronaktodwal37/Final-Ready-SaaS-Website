import { ArrowLeft, Compass } from "lucide-react";
import { Button, Eyebrow } from "../components/UI";
export default function NotFound() {
  return (
    <section className="page-hero min-h-[70vh]">
      <div className="section-shell text-center">
        <span className="mx-auto mb-6 grid size-20 place-items-center rounded-[26px] bg-violet-100 text-violet-600">
          <Compass size={34} />
        </span>
        <Eyebrow>404 — Off course</Eyebrow>
        <h1 className="page-title mx-auto mt-6 max-w-3xl">
          This workflow took an unexpected turn.
        </h1>
        <p className="page-lead mx-auto mt-6">
          The page you’re looking for doesn’t exist, but your next clear step is right here.
        </p>
        <Button to="/" className="mt-8">
          <ArrowLeft size={17} />
          Back to home
        </Button>
      </div>
    </section>
  );
}

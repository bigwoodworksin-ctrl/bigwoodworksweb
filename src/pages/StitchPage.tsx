import type { StitchPage as StitchPageData } from "../data/stitchPages";

interface StitchPageProps {
  page: StitchPageData;
}

export function StitchPage({ page }: StitchPageProps) {
  return (
    <iframe
      className="block h-screen w-full border-0 bg-[#fbf9f1]"
      src={page.file}
      title={page.title}
    />
  );
}

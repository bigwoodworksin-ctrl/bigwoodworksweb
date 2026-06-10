import type { StitchPage as StitchPageData } from "../data/stitchPages";

interface StitchPageProps {
  page: StitchPageData;
}

export function StitchPage({ page }: StitchPageProps) {
  const prepareEmbeddedPage = (frame: HTMLIFrameElement | null) => {
    const document = frame?.contentDocument;

    if (!document) {
      return;
    }

    const header = document.querySelector("header");
    header?.setAttribute("hidden", "true");

    const style = document.createElement("style");
    style.textContent = `
      html { scroll-behavior: smooth; }
      body { min-height: auto !important; }
      header[hidden] { display: none !important; }
    `;
    document.head.append(style);

    const routeByLabel = new Map([
      ["Home", "/"],
      ["About", "/about"],
      ["About Us", "/about"],
      ["Products", "/products"],
      ["Customization", "/customization"],
      ["Wholesale", "/oem-private-label"],
      ["OEM", "/oem-private-label"],
      ["Private Label", "/oem-private-label"],
      ["Manufacturing", "/manufacturing"],
      ["Export", "/export"],
      ["Quality", "/quality"],
      ["Quality Standards", "/quality"],
      ["Contact", "/contact"],
      ["Catalogue", "/catalogue"],
      ["Get a Quote", "/contact"],
      ["Get a Custom Quote", "/contact"],
      ["Request Wholesale Catalogue", "/contact"],
    ]);

    document.querySelectorAll<HTMLAnchorElement>('a[href="#"]').forEach((anchor) => {
      const label = anchor.textContent?.replace(/\s+/g, " ").trim() ?? "";
      const route = routeByLabel.get(label);

      if (route) {
        anchor.href = route;
        anchor.target = "_top";
      }
    });
  };

  return (
    <iframe
      className="block h-[calc(100svh-5rem)] w-full border-0 bg-[#fbf9f1]"
      onLoad={(event) => prepareEmbeddedPage(event.currentTarget)}
      src={page.file}
      title={page.title}
    />
  );
}

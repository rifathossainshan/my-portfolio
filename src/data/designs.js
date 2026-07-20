// Add your design work here. "image" should point to a file placed in /public/designs/
// category is used for the filter buttons in the gallery.

export const designs = [
  {
    id: 1,
    title: "Aurora Coffee — Brand Identity",
    category: "Branding",
    image: "./designs/placeholder-1.jpg",
    year: "2025",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: 2,
    title: "Meridian Music Fest — Poster Series",
    category: "Poster",
    image: "./designs/placeholder-2.jpg",
    year: "2025",
    tools: ["Illustrator"],
  },
  {
    id: 3,
    title: "Nimbus — Mobile App UI",
    category: "UI/UX",
    image: "./designs/placeholder-3.jpg",
    year: "2024",
    tools: ["Figma"],
  },
  {
    id: 4,
    title: "Solstice Journal — Editorial Layout",
    category: "Print",
    image: "./designs/placeholder-4.jpg",
    year: "2024",
    tools: ["InDesign"],
  },
  {
    id: 5,
    title: "Verve Studio — Logo & Stationery",
    category: "Branding",
    image: "./designs/placeholder-5.jpg",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: 6,
    title: "Pulse Dashboard — UI Concept",
    category: "UI/UX",
    image: "./designs/placeholder-6.jpg",
    year: "2023",
    tools: ["Figma"],
  },
];

export const designCategories = ["All", ...new Set(designs.map((d) => d.category))];

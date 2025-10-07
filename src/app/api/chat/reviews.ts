import fs from "fs";
import path from "path";

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

// Reads and parses SentimentTest1.csv for reviews matching the given productId
export function getProductReviews(productId: string): Review[] {
  const csvPath = path.join(process.cwd(), "src/app/SentimentTest1.csv");
  let data: string;
  try {
    data = fs.readFileSync(csvPath, "utf8");
  } catch (err) {
    console.error("Failed to read SentimentTest1.csv:", err);
    return [];
  }

  const lines = data.split(/\r?\n/);
  // Find the header and column indices
  const header = lines[0].split(",");
  const productIdIdx = header.findIndex(h => h.trim().toLowerCase().startsWith("product id"));
  const reviewerIdx = header.findIndex(h => h.trim().toLowerCase().includes("user name"));
  const ratingIdx = header.findIndex(h => h.trim().toLowerCase() === "rating");
  const commentIdx = header.findIndex(h => h.trim().toLowerCase() === "review");

  if (productIdIdx === -1 || reviewerIdx === -1 || ratingIdx === -1 || commentIdx === -1) {
    console.error("CSV header missing required columns");
    return [];
  }

  const reviews: Review[] = [];
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (!row.trim()) continue;
    const cols = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/); // handle quoted commas
    if (cols[productIdIdx].trim() === productId) {
      reviews.push({
        reviewer: cols[reviewerIdx]?.trim() || "Anonymous",
        rating: Number(cols[ratingIdx]) || 0,
        comment: cols[commentIdx]?.replace(/^"|"$/g, '').trim() || ""
      });
    }
  }
  return reviews;
}

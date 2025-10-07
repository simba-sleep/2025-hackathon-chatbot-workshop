// Mock product reviews data

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export const productReviews: { [key: string]: Review[] } = {
  "123": [
    { reviewer: "Alice", rating: 5, comment: "Great product! Highly recommend." },
    { reviewer: "Bob", rating: 4, comment: "Works well, but could be improved." }
  ],
  "456": [
    { reviewer: "Charlie", rating: 3, comment: "Average experience." }
  ]
};

export function getProductReviews(productId: string) {
  return productReviews[productId] || [];
}

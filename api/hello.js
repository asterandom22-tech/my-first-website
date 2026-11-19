export default function handler(req, res) {
  res.status(200).json({
    message: "Welcome to SASY Bakery",
    products: [
      "Cakes",
      "Éclairs",
      "Tiramisu",
      "Doughnuts"
    ]
  });
}

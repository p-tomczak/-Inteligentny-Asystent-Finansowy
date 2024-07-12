using ECommerceAPI.Models;

    public class Product
    {
        public string Name { get; set; } = "";
        public int Id { get; set; }
        
        public decimal Price { get; set; }
        public int Stock { get; set; }
    }
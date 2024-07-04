using System.ComponentModel.DataAnnotations;

public class OrderItem
{
    public int Id { get; set; }

    [Required]
    public int OrderId { get; set; } // Klucz obcy do zamówienia

    [Required]
    public int ProductId { get; set; } // Klucz obcy do produktu

    [Required]
    public int Quantity { get; set; }

    [Required]
    public decimal UnitPrice { get; set; }

    public Product Product { get; set; } // Łączenie do encji Product
}
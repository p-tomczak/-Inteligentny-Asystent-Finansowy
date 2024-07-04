using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class Order
{
    public int Id { get; set; }

    [Required]
    public DateTime OrderDate { get; set; }

    [Required]
    public string CustomerId { get; set; } // Id klienta, który złożył zamówienie

    public ICollection<OrderItem> OrderItems { get; set; } // Relacja 1-do-wielu z OrderItem
}
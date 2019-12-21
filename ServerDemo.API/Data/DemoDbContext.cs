using Microsoft.EntityFrameworkCore;
using ServerDemo.API.Models;
namespace ServerDemo.API.Data
{
    public class DemoDbContext: DbContext
    {
        public DemoDbContext(DbContextOptions<DemoDbContext> options) : base(options)
        {
            
        }

        public DbSet<CustomerModel> Customers { get; set; }
    }
}
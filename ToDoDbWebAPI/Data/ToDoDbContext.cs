using Microsoft.EntityFrameworkCore;

namespace ToDoDbWebAPI.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext (DbContextOptions<ToDoDbContext> options)
            : base(options)
        {
        }

        public DbSet<ToDoDbWebAPI.Model.Task> Task { get; set; }
    }
}

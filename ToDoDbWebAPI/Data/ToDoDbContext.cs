using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ToDoDbWebAPI.Model;

namespace ToDoDbWebAPI.Models
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

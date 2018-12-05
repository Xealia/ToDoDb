using System;
using System.Linq;
using ToDoDbEntityFramework.Models;

namespace ToDoDbEntityFramework
{
    class Program
    {
        static void Main(string[] args)
        {
            var db = new ToDoDbContext();
            var task = db.Task.First();
            Console.WriteLine(task.Describtion);
        }
    }
}

using System;
using System.Collections.Generic;

namespace ToDoDbEntityFramework.Models
{
    public partial class Task
    {
        public long Id { get; set; }
        public string Describtion { get; set; }
        public bool IsDone { get; set; }
    }
}

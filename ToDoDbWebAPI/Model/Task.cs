using System;

namespace ToDoDbWebAPI.Model
{
    public class Task
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateDone { get; set; }
    }
}
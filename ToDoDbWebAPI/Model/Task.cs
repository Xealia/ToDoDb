namespace ToDoDbWebAPI.Model
{
    public class Task
    {
        public long Id { get; set; }
        public string Describtion { get; set; }
        public bool IsDone { get; set; }
    }
}
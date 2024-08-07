export type TaskType = {
  id: string;
  title: string;
  text: string;
  isComplited: boolean;
  children: TaskType[];
}
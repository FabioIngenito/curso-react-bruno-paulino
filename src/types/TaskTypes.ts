export type typOnTaskAdd = (title: string, taskState: string) => void;
export type typOnTaskUpdate = (
  id: number,
  title: string,
  taskState: string
) => void;
export type typOnTaskDelete = (id: number) => void;

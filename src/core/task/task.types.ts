export interface CreateTaskPayload {
  title: string;
  description: string;
  authorId: string;
}

export interface TaskProps {
  authorId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",  
}

export interface RawTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

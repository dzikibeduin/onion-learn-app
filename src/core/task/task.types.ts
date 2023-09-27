export interface CreateTaskPayload {
  title: string;
  description: string;
  authorId: string;
}

export interface TaskProps {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
  author: RawAuthor;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface RawTask {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: TaskStatus;
  author: RawAuthor;
}

export interface RawAuthor {
  id: string;
  email: string;
}

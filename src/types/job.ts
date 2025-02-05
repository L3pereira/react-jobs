export interface Job {
    id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: {
      name: string;
      description: string;
      contactEmail: string;
      contactPhone: string;
    };
  }

  // Define a separate type for job creation
export type JobCreate = Omit<Job, "id">;
  
import { Subjects } from './subjects';

interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}

export { ExpirationCompleteEvent };

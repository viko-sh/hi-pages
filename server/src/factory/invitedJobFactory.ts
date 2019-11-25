import { Factory } from './factory';
import { JobFactory, Job } from './jobFactory';

export class InvitedJobFactory extends JobFactory implements Factory {
  constructor(data: Job) {
    super(data);

    // split the full name and get the first name
    if (this.contactName) {
      const [firstName] = this.contactName.split(' ');
      this.contactName = firstName;
    }
  }

  toResult() {
    return {
      id: this.id,
      contactName: this.contactName,

      price: this.price,
      description: this.description,
      categoryName: this.categoryName,
      suburbName: this.suburbName,
      postCode: this.postCode,
      createdAt: this.createdAt
    };
  }
}

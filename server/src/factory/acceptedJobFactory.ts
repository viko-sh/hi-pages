import { Factory } from './factory';
import { JobFactory, Job } from './jobFactory';

export class AcceptedJobFactory extends JobFactory implements Factory {
  constructor(data: Job) {
    super(data);
  }

  toResult() {
    return {
      id: this.id,
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      price: this.price,
      description: this.description,
      categoryName: this.categoryName,
      suburbName: this.suburbName,
      postCode: this.postCode,
      createdAt: this.createdAt
    };
  }
}

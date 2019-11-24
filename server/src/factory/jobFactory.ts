import { JobsStatus } from '../constants';
import { Factory } from './factory';

type Job = {
  id: number;
  status: JobsStatus;
  suburb_id: number;
  category_id: number;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id?: number;
    name: string;
    parent_category_id?: number;
  };
  suburb: {
    id?: number;
    name: string;
    postcode: number;
  };
};

export class JobFactory implements Factory {
  private id: number;
  private status: JobsStatus;
  private suburbId: number;
  private categoryId: number;
  private categoryName: string;
  private contactName: string;
  private contactEmail: string;
  private contactPhone: string;
  private price: number;
  private description: string;
  private createdAt: string;
  private updatedAt: string;
  private suburbName: string;
  private postCode: number;

  constructor(data: Job) {
    const {
      id,
      status,
      suburb_id,
      category_id,
      contact_name,
      contact_email,
      contact_phone,
      price,
      description,
      createdAt,
      updatedAt,
      category,
      suburb
    } = data;

    // extract category name, we don't need to send any other information to the client from the category
    const categoryName = category && 'name' in category ? category.name : '';
    // extract suburb name, we don't need to send any other information to the client from the suburb
    const suburbName = suburb && 'name' in suburb ? suburb.name : '';
    // get the postcode
    const postCode = suburb && 'postcode' in suburb ? suburb.postcode : 0;

    let contactName = contact_name;
    // contact name should be formated based on the job status
    if (status !== JobsStatus.ACCEPTED) {
      const [firstName] = contact_name.split(' '); // split the full name and get the first name
      contactName = firstName;
    }

    this.id = id;
    this.status = status;
    this.suburbId = suburb_id;
    this.categoryId = category_id;
    this.contactName = contactName;
    this.contactEmail = contact_email;
    this.contactPhone = contact_phone;
    this.price = price;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.categoryName = categoryName;
    this.suburbName = suburbName;
    this.postCode = postCode;
  }

  toResult() {
    return {
      id: this.id,
      status: this.status,
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

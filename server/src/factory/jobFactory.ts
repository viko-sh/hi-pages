import { JobsStatus } from '../constants';
import { Factory } from './factory';

type Job = {
  id: number;
  status: JobsStatus;
  suburb_id: number;
  category_id: number;
  contact_name: string;
  contact_email: string;
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
      price,
      description,
      createdAt,
      updatedAt,
      category,
      suburb
    } = data;

    const categoryName = category && 'name' in category ? category.name : '';
    const suburbName = suburb && 'name' in suburb ? suburb.name : '';
    const postCode = suburb && 'postcode' in suburb ? suburb.postcode : 0;

    this.id = id;
    this.status = status;
    this.suburbId = suburb_id;
    this.categoryId = category_id;
    this.contactName = contact_name;
    this.contactEmail = contact_email;
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
      price: this.price,
      description: this.description,
      categoryName: this.categoryName,
      suburbName: this.suburbName,
      postCode: this.postCode
    };
  }
}

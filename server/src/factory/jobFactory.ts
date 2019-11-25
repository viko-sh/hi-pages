import { JobsStatus } from '../constants';
import { Factory } from './factory';

export type Job = {
  id: number;
  status: JobsStatus;
  suburb_id: number;
  category_id: number;
  contact_name: string;
  contact_email?: string;
  contact_phone?: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt?: string;
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

export class JobFactory {
  protected id: number;
  protected status: JobsStatus;
  protected suburbId: number;
  protected categoryId: number;
  protected categoryName: string;
  protected contactName: string;
  protected contactEmail: string;
  protected contactPhone: string;
  protected price: number;
  protected description: string;
  protected createdAt: string;
  protected updatedAt: string;
  protected suburbName: string;
  protected postCode: number;

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

    this.id = id;
    this.status = status;
    this.suburbId = suburb_id;
    this.categoryId = category_id;
    this.contactName = contact_name;
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

}

export class Address {
  [key: string]: any;
  zip: number = 0;
  country: string = '';
  city: string = '';
  street: string = '';
  notes?: string = '';

  get full(): string {
    return [
      this.zip,
      this.country,
      this.city,
      this.street,
    ].filter(e => e).join(' ')
  }
  constructor(obj: any = {}) {
    this.zip = obj.zip || 0;
    this.country = obj.country || '';
    this.city = obj.city || '';
    this.street = obj.street || '';
    this.notes = obj.notes || '';
  }
}

export interface InvoiceUpdateModel {
  id: string;
  creationDate: Date;
  baseTax: number;
  tax: number;
  referencesPositiveInvoice: string;
  negative: number;
}
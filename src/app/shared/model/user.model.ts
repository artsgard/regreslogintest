import { Data } from './Data.model';

export class User {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
}

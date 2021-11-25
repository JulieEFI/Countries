//import { emoji } from 'emoji-dictionary';
export interface Country {
    dataIndex: any;
    key: number;
    code: string;
    name: string;
    emoji:string;
    capital:string;
    continent: {
        name: string,
    };
}
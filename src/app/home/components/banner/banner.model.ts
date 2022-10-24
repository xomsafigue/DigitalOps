import { Button } from 'src/app/shared/models/button.model';

export interface Banner {
    imgSrc: string
    Title: string
    Description: string
    Button1: Button
    Button2: Button
    OrderNo: string | number
    PageName: string
    Section: string
    AttachmentFiles: any
}


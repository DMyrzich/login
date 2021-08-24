import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img: string;

    @Column()
    title: string;

    @Column()
    price: number;

    oldPrice: number;

    credit: number;

    rating: number;

    description: string;

    advantages: string;

    disAdvantages: string;

    category: string[];

    tags: string;

    characteristics: {
        [key: string]: string;
    }

    

}

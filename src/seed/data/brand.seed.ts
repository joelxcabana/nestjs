import { Brand } from "src/brands/entities/brand.entity";
import {v4 as uuid} from 'uuid'

export const BRANDS_SEED: Brand[] = [
    {
        id:uuid(),
        name:'Toyota',
        createdAt:new Date().getDate()
    },
    {
        id:uuid(),
        name:'volvo',
        createdAt:new Date().getDate()
    },
    {
        id:uuid(),
        name:'Honda',
        createdAt:new Date().getDate()
    },
    {
        id:uuid(),
        name:'Tesla',
        createdAt:new Date().getDate()
    }
]
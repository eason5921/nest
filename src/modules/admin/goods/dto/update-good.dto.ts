import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodDto } from './create-good.dto';

export class UpdateGoodDto extends PartialType(CreateGoodDto) {
    modifier:string;
    id:string|number;
}

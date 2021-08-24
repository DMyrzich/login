import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { ReviewEntity } from './review.entity';

type DtoReview = Omit<ReviewEntity, "id">;

@Controller('review')
export class ReviewController {

    @Post('create')
    async create(@Body() dto: DtoReview) {

    }

    @Delete('delete')
    async delete(@Param() id: string) {

    }

    @Get('getByProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {

    }

}

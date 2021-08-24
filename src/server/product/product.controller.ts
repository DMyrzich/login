import { Controller, Post, Get, Body, Param, Delete, Patch, HttpCode } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductFindDto } from './dto/product-find.dto';

type productDto = Omit<ProductEntity, "id">;

@Controller('product')
export class ProductController {

    @Post('create')
    async create(@Body() dto: productDto) {

    }

    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async patch(@Param("id") id: string, @Body() dth: ProductEntity) {

    }

    @HttpCode(200)
    @Post('find')
    async find(@Param('str') dto: ProductFindDto) {

    }

}

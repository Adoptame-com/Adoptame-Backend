import { InjectModel } from '@nestjs/mongoose';
import { Adoption } from '@src/modules/mongo/schemas/adoption.schema';
import { Model } from 'mongoose';
import { AdoptionDto } from '../dtos/adoptions.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdoptionsService {
  constructor(
    @InjectModel(Adoption.name) private adoptionModel: Model<Adoption>,
  ) {}
  async findAll(): Promise<AdoptionDto[]> {
    const adoptions = await this.adoptionModel.find().exec();
    return adoptions.map((adoption: Adoption) => ({
      account: adoption.account.toString(),
      imagesVideoUrl: adoption.imagesVideoUrl,
      name: adoption.name,
      city: adoption.city.toString(),
      age: adoption.age,
      genre: adoption.genre,
      race: adoption.race,
      weight: adoption.weight,
      description: adoption.description,
      tastes: adoption.tastes,
      characteristics: adoption.characteristics,
      quantity: adoption.quantity,
      sterilized: adoption.sterilized,
      createdAt: adoption.createdAt,
      updatedAt: adoption.updatedAt,
    }));
  }
}

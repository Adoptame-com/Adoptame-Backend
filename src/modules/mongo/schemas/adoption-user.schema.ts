import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from './account.schema';
import { City } from './city.schema';
import { HouseType } from './house-type.schema';

@Schema({ timestamps: true })
export class AdoptionUser extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: Account.name,
    required: true,
    unique: true,
  })
  account: Types.ObjectId;

  @Prop({ type: String, required: true })
  cellphone: string;

  @Prop({ type: Types.ObjectId, ref: City.name, required: true })
  city: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HouseType.name, required: true })
  houseType: Types.ObjectId;

  @Prop({ type: Number, required: true })
  dedicationTime: number;

  @Prop({ type: [String], required: false })
  previousPets: string[];

  @Prop({ type: String, required: true })
  interest: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(AdoptionUser);

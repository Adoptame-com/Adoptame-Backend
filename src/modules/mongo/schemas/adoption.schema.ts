import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from './account.schema';
import { City } from './city.schema';

@Schema({ timestamps: true })
export class AdoptionUser extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: Account.name,
    required: true,
    unique: true,
  })
  account: Types.ObjectId;

  @Prop({ type: [String], required: false })
  imagesVideoUrl: string[];

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: City.name, required: true })
  city: Types.ObjectId;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  genre: string;

  @Prop({ type: String, required: true })
  race: string;

  @Prop({ type: Number, required: true })
  weight: number;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: [String], required: true })
  tastes: string[];

  @Prop({ type: [String], required: true })
  characteristics: string[];

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Boolean, required: true })
  sterilized: boolean;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(AdoptionUser);

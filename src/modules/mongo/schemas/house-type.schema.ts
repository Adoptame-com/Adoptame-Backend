import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class HouseType extends Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const AccountSchema = SchemaFactory.createForClass(HouseType);

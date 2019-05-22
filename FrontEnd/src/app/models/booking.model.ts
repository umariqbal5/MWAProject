import {PackageModel} from './package.model';
import {User} from './user.model';

export type BookingStatus = 'CONFIRMED'| 'COMPLETED'| 'CANCELLED'| 'DELETED';

export interface BookingModel extends Document {
  bookingRef: string;
  package: PackageModel;
  user: User;
  travelers: Array<object>;
  no_adult: number;
  no_child: number;
  bookingStatus: BookingStatus;
  departureDate: Date;
  duration: number;
  totalPrice: number;
  createdAt: Date;
}

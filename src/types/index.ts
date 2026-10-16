export type ServiceCategory = 'all' | 'inspection' | 'ebike' | 'repair' | 'brakes' | 'tires';

export interface WorkshopService {
  id: string;
  name: string;
  category: ServiceCategory;
  price: string;
  priceNumeric: number;
  duration: string;
  popular?: boolean;
  shortDescription: string;
  fullDescription: string;
  includedPoints: string[];
  recommendedFor: string;
}

export interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
}

export type BikeType =
  | 'ebike-pedelec'
  | 'city-trekking'
  | 'mountainbike'
  | 'gravel-road'
  | 'cargo-kids';

export interface BookingFormData {
  serviceId: string;
  bikeType: BikeType;
  bikeBrand: string;
  bikeModel: string;
  issueDescription: string;
  date: string; // YYYY-MM-DD
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  privacyAgreed: boolean;
}

export interface ConfirmedBooking extends BookingFormData {
  bookingId: string;
  createdAt: string;
  serviceName: string;
  servicePrice: string;
  serviceDuration: string;
  status: 'confirmed' | 'in_progress' | 'ready_for_pickup' | 'completed';
}

export interface OpeningHourDay {
  day: string;
  dayShort: string;
  hours: string;
  isOpen: boolean;
  isWorkshopOnly?: boolean;
  morning?: string;
  afternoon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  bikeType: string;
}

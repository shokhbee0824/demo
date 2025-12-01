export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  joinedAt: Date;
  referralCode: string;
}

export interface Transaction {
  id: string;
  type: 'EARN' | 'SPEND' | 'TRANSFER' | 'UTILITY';
  amount: number;
  date: string;
  description: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export enum WasteType {
  PLASTIC = 'PLASTIC',
  GLASS = 'GLASS',
  PAPER = 'PAPER',
  METAL = 'METAL',
  ORGANIC = 'ORGANIC',
  UNKNOWN = 'UNKNOWN'
}

export interface ScanResult {
  id: string;
  imageUrl: string;
  detectedType: WasteType;
  confidence: number;
  estimatedWeight: number; // in grams
  ecoCoins: number;
  timestamp: string;
  isFraud: boolean;
  fraudReason?: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  score: number;
  avatar: string;
}
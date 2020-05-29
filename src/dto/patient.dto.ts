export class PatientDto {
	ID?: number;
	PatientName: string;
	Address: string;
	Sex: string;
	DOB: Date;
	PhoneNo: any;
	TblCountry_ID: number;
	TblState_ID: number;
	TblCity_ID: number;
	Country?: string;
	State?: string;
	City?: string;
}

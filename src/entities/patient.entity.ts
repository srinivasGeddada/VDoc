import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { CountryEntity } from './country.entity';
import { StateEntity } from './state.entity';
import { CityEntity } from './city.entity';

@Entity({ name: 'TblPatient' })
export class PatientEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column({ type: 'varchar', length: '500' })
	PatientName: any;

	@Column({ type: 'varchar', length: '500' })
	Address: any;
	@Column({ type: 'varchar', length: '2' })
	Sex: any;

	@Column({ type: 'date' })
	DOB: Date;

	@Column() TblCountry_ID: any;
	@Column() TblState_ID: any;
	@Column() TblCity_ID: any;

	@ManyToOne(() => CountryEntity, (country: CountryEntity) => country.patient)
	@JoinColumn({ name: 'TblCountry_ID' })
	country: CountryEntity;

	@ManyToOne(() => StateEntity, (state: StateEntity) => state.patient)
	@JoinColumn({ name: 'TblState_ID' })
	state: StateEntity;

	@ManyToOne(() => CityEntity, (city: CityEntity) => city.patient)
	@JoinColumn({ name: 'TblCity_ID' })
	city: CityEntity;
}

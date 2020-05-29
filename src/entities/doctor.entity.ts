import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { CountryEntity } from './country.entity';
import { StateEntity } from './state.entity';
import { CityEntity } from './city.entity';

@Entity({ name: 'TblDoctor' })
export class DoctorEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column({ type: 'varchar', length: '500' })
	DoctorName: any;

	@Column({ type: 'varchar', length: '500' })
	Address: any;
	@Column({ type: 'varchar', length: 11, nullable: false })
	PhoneNo: any;
	@Column({ type: 'bool', default: false })
	isDeleted: boolean;
	@Column() TblCountry_ID: any;
	@Column() TblState_ID: any;
	@Column() TblCity_ID: any;

	@ManyToOne(() => CountryEntity, (country: CountryEntity) => country.doctor)
	@JoinColumn({ name: 'TblCountry_ID' })
	country: CountryEntity;

	@ManyToOne(() => StateEntity, (state: StateEntity) => state.doctor)
	@JoinColumn({ name: 'TblState_ID' })
	state: StateEntity;

	@ManyToOne(() => CityEntity, (city: CityEntity) => city.doctor)
	@JoinColumn({ name: 'TblCity_ID' })
	city: CityEntity;
}

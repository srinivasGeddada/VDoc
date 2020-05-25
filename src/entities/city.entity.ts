import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { CountryEntity } from './country.entity';
import { StateEntity } from './state.entity';
import { PatientEntity } from './patient.entity';
import { DoctorEntity } from './doctor.entity';

@Entity({ name: 'TblCity' })
export class CityEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column() city: string;
	@Column() stateID: number;

	@Column() countryID: number;

	@ManyToOne(() => CountryEntity, (country: CountryEntity) => country.city)
	@JoinColumn({ name: 'countryID' })
	country: CountryEntity;

	@ManyToOne(() => StateEntity, (state: StateEntity) => state.city)
	@JoinColumn({ name: 'stateID' })
	state: StateEntity;

	@OneToMany(() => PatientEntity, (patient: PatientEntity) => patient.city, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	patient: PatientEntity[];
	@OneToMany(() => DoctorEntity, (doctor: DoctorEntity) => doctor.city, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	doctor: DoctorEntity[];
}

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { CountryEntity } from 'src/entities/country.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { CityEntity } from './city.entity';
import { PatientEntity } from './patient.entity';
import { DoctorEntity } from './doctor.entity';

@Entity({ name: 'TblState' })
export class StateEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column() state: string;

	@ManyToOne(() => CountryEntity, (country: CountryEntity) => country.states, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
	})
	@JoinColumn({ name: 'countryID' })
	country: CountryEntity[];

	@Column() countryID: number;

	@OneToMany(() => CityEntity, (district: CityEntity) => district.state)
	city: CityEntity[];

	@OneToMany(() => PatientEntity, (patient: PatientEntity) => patient.state, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	patient: PatientEntity[];
	@OneToMany(() => DoctorEntity, (doctor: DoctorEntity) => doctor.state, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
	doctor: DoctorEntity[];
}

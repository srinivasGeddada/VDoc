import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StateEntity } from './state.entity';
import { CityEntity } from './city.entity';
import { PatientEntity } from './patient.entity';
import { DoctorEntity } from './doctor.entity';

@Entity({ name: 'TblCounrty' })
export class CountryEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column({ type: 'text', nullable: false })
	country: string;

	@Column({ type: 'text', nullable: true })
	code: string;

	@OneToMany(() => StateEntity, (state: StateEntity) => state.country, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
	states: StateEntity[];

	@OneToMany(() => CityEntity, (district: CityEntity) => district.country)
	city: CityEntity[];

	@OneToMany(() => PatientEntity, (patient: PatientEntity) => patient.country, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	patient: PatientEntity[];
	@OneToMany(() => DoctorEntity, (doctor: DoctorEntity) => doctor.country, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	doctor: PatientEntity[];
}

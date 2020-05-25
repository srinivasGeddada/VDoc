import { GenericEntity } from 'src/generic/generic.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { PerceptionEntity } from './preception.entity';
@Entity({ name: 'TblMedicineMaster' })
export class MedicineMasterEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column({ type: 'varchar', length: '500' })
	Name: any;
	@Column({ type: 'varchar', length: '50' })
	DrugName: any;
	@Column({ type: 'float' })
	Price: any;
	@Column({ type: 'timestamp without time zone' })
	ExpDate: any;
	@Column({ type: 'varchar', length: '500' })
	MfgName: any;
	@Column({ type: 'varchar', length: '45' })
	Route: any;
	@Column({ type: 'varchar', length: '45' })
	Frequency: any;
	@Column({ type: 'varchar', length: '45' })
	Strength: any;
	@Column({ type: 'varchar', length: '45' })
	Disp: any;

	@OneToMany(() => PerceptionEntity, (perception: PerceptionEntity) => perception.medicineMaster)
	perception: PerceptionEntity[];
}

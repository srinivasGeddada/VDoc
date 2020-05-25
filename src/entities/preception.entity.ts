import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MedicineMasterEntity } from './medicineMaster.entity';
@Entity({ name: 'TblPerceptions' })
export class PerceptionEntity {
	@PrimaryGeneratedColumn() ID: number;
	@Column({ type: 'int' })
	Quantity: number;

	@Column({ type: 'float' })
	Amount: any;

	@ManyToOne(() => MedicineMasterEntity, (medicineMaster: MedicineMasterEntity) => medicineMaster.perception)
	@JoinColumn({ name: 'TblMedicineMaster_ID' })
	medicineMaster: MedicineMasterEntity;

	@Column() TblMedicineMaster_ID: number;
}

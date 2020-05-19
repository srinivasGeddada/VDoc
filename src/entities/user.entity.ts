import { GenericEntity } from 'src/generic/generic.entity';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;
	@Column({ type: 'text', nullable: false })
	userName: string;

	@Column({ type: 'text', nullable: false })
	password: string;

	@Column({ type: 'text', nullable: true })
	address: string;

	@Column({ type: 'text', nullable: false })
	email: string;

	@Column({ type: 'integer', nullable: true })
	aadhaarNo: number;

	@Column({ type: 'integer', nullable: false })
	phoneNo: number;
}

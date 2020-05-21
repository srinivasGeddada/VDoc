import { GenericEntity } from 'src/generic/generic.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { RolesEntity } from './roles.entity';

@Entity({ name: 'user' })
export class UserEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;
	@Column({ type: 'text', nullable: false })
	userName: string;

	@Column({ type: 'text', nullable: false })
	password: string;


	@Column({ type: 'text', nullable: false })
	email: string;

	@Column({ length: 11, type: 'varchar', nullable: false })
	phoneNo: string;

	@Column({ nullable: false })
	TblRole_ID: number;

	@ManyToOne(() => RolesEntity, (role: RolesEntity) => role.user)
	@JoinColumn({ name: 'TblRole_ID' })
	roles: RolesEntity;
}

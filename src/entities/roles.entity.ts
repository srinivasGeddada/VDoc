import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'TblRoles' })
export class RolesEntity extends GenericEntity {
	@PrimaryGeneratedColumn() ID: number;

	@Column({ type: 'varchar' })
	RoleName: string;

	@Column({ type: 'bool' })
	TwoStepAuthRequired: boolean;

	@OneToMany(() => UserEntity, (user: UserEntity) => user.roles)
	user: UserEntity;
}

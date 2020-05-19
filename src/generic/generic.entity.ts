import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";
export class GenericEntity{
    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' ,select:false})
	@Exclude()
    createdDateTime: Date;
    
    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp',select:false })
	@Exclude()
	updatedDateTime: Date;

}
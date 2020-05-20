export class GlobalResponse {
	constructor(readonly success: boolean, readonly status: number, readonly data: any, readonly message?: any) {}
}

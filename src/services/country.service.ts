import { Injectable, Inject, HttpStatus, Global } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CountryEntity } from 'src/entities/country.entity';
import { GlobalResponse } from 'src/shared/response';
import { StateEntity } from 'src/entities/state.entity';
import { CityEntity } from 'src/entities/city.entity';

@Injectable()
export class CountryService {
	constructor(
		@Inject('CountryRepository') private readonly countryRepo: Repository<CountryEntity>,
		@Inject('StateRepository') private readonly stateRepo: Repository<StateEntity>,
		@Inject('CityRepository') private readonly cityRepo: Repository<CityEntity>
	) {}

	async getAllCounrties() {
		const countries = await this.countryRepo.find();
		return new GlobalResponse(true, HttpStatus.OK, countries, '');
	}
	async getAllStates() {
		const states = await this.stateRepo.find();
		return new GlobalResponse(true, HttpStatus.OK, states, '');
	}
	async getAllCities() {
		const cities = await this.cityRepo.find();
		return new GlobalResponse(true, HttpStatus.OK, cities, '');
	}

	async createCountry(countryDto) {
		try {
			
			let isExists = await this.countryRepo
				.createQueryBuilder('country')
				.where('LOWER(country.country)=LOWER(:name)', { name:countryDto.country })
				.getMany();
			if (isExists.length === 0) {
				const country = await this.countryRepo.save(countryDto);
				if (country) {
				} else {
					return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'Country Exists');
				}
				return new GlobalResponse(true, HttpStatus.CREATED, [], 'Success');
			}
		} catch (error) {
            return new GlobalResponse(false,HttpStatus.INTERNAL_SERVER_ERROR,[],error.message)
        }
	}

	async createState(stateDto) {
		try {
			const isExists = await this.stateRepo
				.createQueryBuilder('states')
				.where('LOWER(states.state)=LOWER(:name)', { name: stateDto.state })
				.getMany();

			if (isExists.length === 0) {
				const state = await this.stateRepo.save(stateDto);
				if (state) {
					return new GlobalResponse(true, HttpStatus.CREATED, [], 'Success');
				}
			} else {
				return new GlobalResponse(false, HttpStatus.CONFLICT, [], 'State Exists');
			}
		} catch (error) {
			console.log(error);
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}
	async cityCreate(cityDto) {
		try {
			const city = await this.cityRepo.save(cityDto);
			if (city) {
				return new GlobalResponse(true, HttpStatus.CREATED, [], 'Success');
			}
		} catch (error) {
			return new GlobalResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, [], error.message);
		}
	}
}

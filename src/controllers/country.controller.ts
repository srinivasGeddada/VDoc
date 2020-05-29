import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CountryService } from 'src/services/country.service';
import { CounrtyDto } from 'src/dto/country.dto';
import { StateDto } from 'src/dto/state.dto';
import { CityDto } from 'src/dto/city.dto';

@Controller('masters')
export class CountryController {
	constructor(private readonly masterService: CountryService) {}
	@Get('countries/all')
	getCountries() {
		return this.masterService.getAllCounrties();
	}

	@Get('states/all')
	getStates() {
		return this.masterService.getAllStates();
	}

	@Get('cities/all')
	getCities() {
		return this.masterService.getAllCities();
	}

	@Post('country/create')
	createCountry(@Body() countryDto: CounrtyDto) {
		return this.masterService.createCountry(countryDto);
	}

	@Post('state/create')
	createState(@Body() stateDto: StateDto) {
		return this.masterService.createState(stateDto);
	}

	@Post('city/create')
	createCity(@Body() cityDto: CityDto) {
		return this.masterService.cityCreate(cityDto);
	}

	@Get('states/countryID/:id')
	getStatesByCountryID(@Param('id') id) {
		return this.masterService.getStatesByCountryID(id);
	}
	@Get('cities/stateID/:id')
	getCitiesByStateID(@Param('id') id) {
		return this.masterService.getCitiesByStateID(id);
	}
}

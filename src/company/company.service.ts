import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompanyService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getCompany() {
    const connection = await this.databaseService.getConnection();
    const result = await connection.query`select * from company`;
    return result.recordset;
  }
}

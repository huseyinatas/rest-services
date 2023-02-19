import { Injectable } from '@nestjs/common';
import { databaseConfig } from 'config/database.config';
import * as sql from 'mssql';

@Injectable()
export class DatabaseService {
  private pool: sql.ConnectionPool;

  async onModuleInit() {
    this.pool = await new sql.ConnectionPool(databaseConfig).connect();
  }

  async getConnection() {
    if (!this.pool) {
      this.pool = await new sql.ConnectionPool(databaseConfig).connect();
    }
    return this.pool;
  }
}

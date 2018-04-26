// because we are on webpack child compilation we want to force full load, not partial modules.
import 'reflect-metadata';
import 'service-mocker/server';
import '@tdm/tixin';
import '@tdm/core';
import '@tdm/data';
import '@tdm/local-forage';
import '@tdm/service-mocker/shared';

import { targetStore } from '@tdm/core/tdm';
import { DAO } from '@tdm/data';
import { MockerResponse } from 'service-mocker/server';
import {
  OnMessage,
  ServerBase,
  Server,
  HttpError,
  FallbackRoute,
  Response
} from '@tdm/service-mocker';
import { ClientRequest, ServerResponse } from '@tdm/service-mocker/shared';

import { registerOfflineWorker } from './offline';
import './contract';
import {
  CategoryController,
  CustomerController,
  EmployeeController,
  EmployeeTerritoryController,
  OrderController,
  OrderDetailController,
  ProductController,
  RegionController,
  ShipperController,
  SupplierController,
  TerritoryController
} from './controllers';
// registerOfflineWorker(<any> self);

@Server({
  baseUrl: '/api',
  controllers: [
    CategoryController,
    CustomerController,
    EmployeeController,
    EmployeeTerritoryController,
    OrderController,
    OrderDetailController,
    ProductController,
    RegionController,
    ShipperController,
    SupplierController,
    TerritoryController
  ]
})
class MyServer extends ServerBase {
  init(): void { }

  @FallbackRoute()
  handle404(@Response() res: MockerResponse): Promise<any> | any {
    return res.status(404).json(HttpError.createKnown('404'));
  }

  @OnMessage()
  private async restoreDb(data: ClientRequest<'restoreDb'>): Promise<ServerResponse<'restoreDb'>> {
    for ( let tName of Object.keys(data) ) {
      const target = targetStore.findTarget(tName);
      if ( target ) {
        const dao = DAO.localForage(target);
        await dao.clear();
        await dao.createBulk(data[tName]);
      }
    }

    return;
  }
}

const server = new MyServer();

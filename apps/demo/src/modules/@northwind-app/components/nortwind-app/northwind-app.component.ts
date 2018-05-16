import { Subscription } from 'rxjs';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Customer, Employee, Order } from '@shared/client';
import { TDMCollection } from '@tdm/core/tdm';
import { DataSourceContainer } from '@shared';
import { ActivatedRoute, Router } from '@angular/router';

const listTypeMap = {
  customers: {
    query(): TDMCollection<Customer> {
      return Customer.query();
    },
    columns: [
      'CustomerID',
      'ContactName',
      'ContactTitle',
      'Country'
    ]
  },
  employees: {
    query(): TDMCollection<Employee> {
      return Employee.query();
    },
    columns: [
      'EmployeeID',
      'FirstName',
      'LastName',
      'Title'
    ]
  },
  orders: {
    query(): TDMCollection<Order> {
      return Order.query();
    },
    columns: [
      'OrderID',
      'OrderDate'
    ]
  }
};

@Component({
  selector: 'northwind-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './northwind-app.component.html',
  styleUrls: [ './northwind-app.component.scss' ]
})
export class NorthwindAppComponent implements OnDestroy {
  collection: TDMCollection<any>;
  dataSource = new DataSourceContainer([]);
  columns: string[];
  private _subs: Subscription;
  private listType: 'customers' | 'employees' | 'orders';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this._subs = activeRoute.paramMap
      .subscribe(params => this.onListTypeChange(params.get('listType')) );
  }

  onListTypeChange(listType: string): void {
    if (!listType) {
      this.router.navigate(['./orders'], {
        relativeTo: this.activeRoute,
        replaceUrl: true
      });
      return;
    }
    if (this.listType === listType) {
      return;
    }
    switch (listType) {
      case 'customers':
      case 'employees':
      case 'orders':
        this.listType = listType;
        this.collection = listTypeMap[listType].query();
        this.columns = listTypeMap[listType].columns;
        this.dataSource.updateSource(this.collection.$rc.self$ as any);
        break;
      default:
        this.router.navigate([ '/page-404' ]);
        break;
    }
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForAdminComponent } from './table-for-admin.component';

describe('TableForAdminComponent', () => {
  let component: TableForAdminComponent;
  let fixture: ComponentFixture<TableForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

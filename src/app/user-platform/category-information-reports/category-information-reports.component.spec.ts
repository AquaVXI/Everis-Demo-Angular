import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInformationReportsComponent } from './category-information-reports.component';

describe('CategoryInformationReportsComponent', () => {
  let component: CategoryInformationReportsComponent;
  let fixture: ComponentFixture<CategoryInformationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryInformationReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInformationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

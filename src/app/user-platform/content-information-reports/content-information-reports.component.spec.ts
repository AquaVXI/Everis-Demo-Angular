import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInformationReportsComponent } from './content-information-reports.component';

describe('ContentInformationReportsComponent', () => {
  let component: ContentInformationReportsComponent;
  let fixture: ComponentFixture<ContentInformationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInformationReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInformationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

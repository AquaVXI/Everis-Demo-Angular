import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCategoryReportsCatAComponent } from './content-category-reports-cat-a.component';

describe('ContentCategoryReportsCatAComponent', () => {
  let component: ContentCategoryReportsCatAComponent;
  let fixture: ComponentFixture<ContentCategoryReportsCatAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCategoryReportsCatAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCategoryReportsCatAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

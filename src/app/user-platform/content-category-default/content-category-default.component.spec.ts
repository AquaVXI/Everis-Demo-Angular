import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCategoryDefaultComponent } from './content-category-default.component';

describe('ContentCategoryDefaultComponent', () => {
  let component: ContentCategoryDefaultComponent;
  let fixture: ComponentFixture<ContentCategoryDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCategoryDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCategoryDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

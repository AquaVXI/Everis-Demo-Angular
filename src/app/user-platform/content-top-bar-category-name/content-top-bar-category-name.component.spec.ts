import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopBarCategoryNameComponent } from './content-top-bar-category-name.component';

describe('ContentTopBarCategoryNameComponent', () => {
  let component: ContentTopBarCategoryNameComponent;
  let fixture: ComponentFixture<ContentTopBarCategoryNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTopBarCategoryNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopBarCategoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDefaultComponent } from './content-default.component';

describe('ContentDefaultComponent', () => {
  let component: ContentDefaultComponent;
  let fixture: ComponentFixture<ContentDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

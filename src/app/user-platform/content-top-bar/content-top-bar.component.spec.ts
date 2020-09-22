import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopBarComponent } from './content-top-bar.component';

describe('ContentTopBarComponent', () => {
  let component: ContentTopBarComponent;
  let fixture: ComponentFixture<ContentTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

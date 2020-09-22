import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUserPlatformComponent } from './root-user-platform.component';

describe('RootUserPlatformComponent', () => {
  let component: RootUserPlatformComponent;
  let fixture: ComponentFixture<RootUserPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootUserPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootUserPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcombComponent } from './navbarcomb.component';

describe('NavbarcombComponent', () => {
  let component: NavbarcombComponent;
  let fixture: ComponentFixture<NavbarcombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarcombComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

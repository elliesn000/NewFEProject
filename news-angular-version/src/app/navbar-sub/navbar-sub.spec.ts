import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarSub } from './navbar-sub';

describe('SubNavbar', () => {
  let component: NavbarSub;
  let fixture: ComponentFixture<NavbarSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSub],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarSub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

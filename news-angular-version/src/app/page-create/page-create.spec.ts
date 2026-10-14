import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreate } from './page-create';

describe('PageCreate', () => {
  let component: PageCreate;
  let fixture: ComponentFixture<PageCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

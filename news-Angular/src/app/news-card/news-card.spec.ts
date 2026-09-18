import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsDb } from './news-card';

describe('NewsDb', () => {
  let component: NewsDb;
  let fixture: ComponentFixture<NewsDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDb],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsScrolling } from './news-scrolling';

describe('NewsScrolling', () => {
  let component: NewsScrolling;
  let fixture: ComponentFixture<NewsScrolling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsScrolling],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsScrolling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

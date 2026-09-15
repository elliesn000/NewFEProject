import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsMain } from './news-main';

describe('NewsMain', () => {
  let component: NewsMain;
  let fixture: ComponentFixture<NewsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsMain],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

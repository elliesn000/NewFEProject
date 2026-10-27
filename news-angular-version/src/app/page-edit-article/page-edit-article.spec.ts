import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEditArticle } from './page-edit-article';

describe('PageEditArticle', () => {
  let component: PageEditArticle;
  let fixture: ComponentFixture<PageEditArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEditArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

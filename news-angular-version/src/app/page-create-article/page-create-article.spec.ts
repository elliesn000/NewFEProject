import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreateArticle } from './page-create-article';

describe('PageCreateArticle', () => {
  let component: PageCreateArticle;
  let fixture: ComponentFixture<PageCreateArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreateArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

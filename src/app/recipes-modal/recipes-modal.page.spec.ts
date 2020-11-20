import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipesModalPage } from './recipes-modal.page';

describe('RecipesModalPage', () => {
  let component: RecipesModalPage;
  let fixture: ComponentFixture<RecipesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

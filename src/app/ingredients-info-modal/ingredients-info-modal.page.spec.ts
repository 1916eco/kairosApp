import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientsInfoModalPage } from './ingredients-info-modal.page';

describe('IngredientsInfoModalPage', () => {
  let component: IngredientsInfoModalPage;
  let fixture: ComponentFixture<IngredientsInfoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsInfoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientsInfoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

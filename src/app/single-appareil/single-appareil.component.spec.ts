import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppareilComponent } from './single-appareil.component';

describe('SingleAppareilComponent', () => {
  let component: SingleAppareilComponent;
  let fixture: ComponentFixture<SingleAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAppareilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

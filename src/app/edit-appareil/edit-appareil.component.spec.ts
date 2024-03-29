import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppareilComponent } from './edit-appareil.component';

describe('EditAppareilComponent', () => {
  let component: EditAppareilComponent;
  let fixture: ComponentFixture<EditAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAppareilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

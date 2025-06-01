import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilesComponent } from './vigiles.component';

describe('VigilesComponent', () => {
  let component: VigilesComponent;
  let fixture: ComponentFixture<VigilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VigilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

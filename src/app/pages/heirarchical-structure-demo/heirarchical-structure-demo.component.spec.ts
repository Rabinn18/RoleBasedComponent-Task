import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeirarchicalStructureDemoComponent } from './heirarchical-structure-demo.component';

describe('HeirarchicalStructureDemoComponent', () => {
  let component: HeirarchicalStructureDemoComponent;
  let fixture: ComponentFixture<HeirarchicalStructureDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeirarchicalStructureDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeirarchicalStructureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

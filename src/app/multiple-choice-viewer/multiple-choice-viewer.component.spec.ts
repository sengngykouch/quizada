import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceViewerComponent } from './multiple-choice-viewer.component';

describe('MultipleChoiceViewerComponent', () => {
  let component: MultipleChoiceViewerComponent;
  let fixture: ComponentFixture<MultipleChoiceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleChoiceViewerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
